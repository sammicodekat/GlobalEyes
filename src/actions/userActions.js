import { firebaseDb } from '../firebase'
import * as types from './actionTypes'
import store from '../store'

var userVariable = 'user'

const userRef = firebaseDb.ref(userVariable)


function receiveUser(userObj) {
  return { type: types.RECEIVE_USER, userObj}
}

function continuePreviousGame(userObject) {
  return { type: types.WILL_USER_CONTINUE_GAME, userObject}
}

export function getUserObj(userId) {
  userRef.once('value', snap => {
    let object = snap.val()
    let userObj = object[userId]
    return store.dispatch(receiveUser(userObj))
  })
}

export function storeUserObj(userObj) {
  userVariable = userObj.uid
  userRef.once('value', snap => {
    let object = snap.val()
    let keys = Object.keys(object)
    if(keys.includes(userObj.uid)){
      let userId = userObj.uid
      return store.dispatch(continuePreviousGame(userId))
    } else {
      let myObj = {}
      myObj[userObj.uid] = userObj;
      userRef.update(myObj)
    }
    
  })
}

// export function getUserObj(userId) {
//   userRef.once('value', snap => {
//     let object = snap.val()
//     let userObj = object.userId
//     return store.dispatch(receiveUser(userObj))
//     //use the userId to filter the snap.val() and then send userObj to state
//   })
// }

// export function storeUserObj(userObj) {
//   userVariable = userObj.uid
//   userRef.once('value', snap => {
//     let object = snap.val()
//     let keys = Object.keys(object)
//     if(keys.includes(userObj.uid)){
//       let userId = userObj.uid
//       return store.dispatch(receiveUser(object[userId]))
//     } else {
//       let myObj = {}
//       myObj[userObj.uid] = userObj;
//       userRef.update(myObj)
//     }
    
//   })
// }

// export function startListeningForUser() {
//   return dispatch => {
//     userRef.off()
//     userRef.on('value', snapshot => {
//       let userObj = snapshot.val()
//       dispatch(receiveUser(userObj))
//     }, err => {
//       console.error(err)
//     })
//   }
// }

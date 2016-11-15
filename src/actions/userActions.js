import { firebaseDb } from '../firebase'
import * as types from './actionTypes'
import store from '../store'

var userVariable = 'user'

const userRef = firebaseDb.ref(userVariable)


function receiveUser(userObj) {
  return {
    type: types.RECEIVE_USER,
    payload: userObj
  }
}

function continuePreviousGame(userId) {
  return { type: types.WILL_USER_CONTINUE_GAME, userId}
}

export function storeUserObj(userObj) {
  userVariable = userObj.uid
  userRef.once('value', function(snapshot) {
    let object = snapshot.val()
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

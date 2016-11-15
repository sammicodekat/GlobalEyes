import { firebaseDb } from '../firebase'
import * as types from './actionTypes'

var userVariable = 'user'

const userRef = firebaseDb.ref(userVariable)

//check if userObject exists
//if it does then fetch it for use in the store
//if not create one and add in the first data set(waypoint, clue etc...)

// function fetchUserObjects() {
//   let allUsers
//   userRef.off()
//   userRef.on('value', snapshot => {
//     let mySnapShot = snapshot.val()
//     return mySnapShot
//   })
// }

function receiveUser(userObj) {
  return {
    type: types.RECEIVE_USER,
    payload: userObj
  }
}

function continuePreviousGame(pizza) {
  console.log('I am pizza: ', typeof pizza)
  return { type: types.WILL_USER_CONTINUE_GAME, pizza}
}

export function storeUserObj(userObj) {
  userVariable = userObj.uid
  userRef.once('value', function(snapshot) {
    let object = snapshot.val()
    let keys = Object.keys(object)
    if(keys.includes(userObj.uid)){
      let daniel = userObj.uid
      continuePreviousGame(daniel)
      console.log('I am daniel', typeof daniel)
      return
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

import { firebaseDb } from '../firebase'
import * as types from './actionTypes'

const userRef = firebaseDb.ref('user')

//check if userObject exists
//if it does then fetch it for use in the store
//if not create one and add in the first data set(waypoint, clue etc...)

function fetchUserObjects() {
  let allUsers
  userRef.off()
  userRef.on('value', snapshot => {
    let mySnapShot = snapshot.val()
    return mySnapShot
  })
}

function receiveUser(userObj) {
  return {
    type: types.RECEIVE_USER,
    payload: userObj
  }
}

export function storeUserObj(userObj) {
  userRef.push(userObj)
}

// export function fetchUserObject() {
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


// export function createNewUserObj(userObj) {
//   userRef.push(userObj)

//   return {
//     type: types.USER_CREATED,
//     payload: userObj
//   }
// }
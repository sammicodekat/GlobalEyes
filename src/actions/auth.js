import firebase from 'firebase'
import * as types from './actionTypes'
import { firebaseAuth, firebaseDb } from '../firebase'
import store from '../store'

var userVariable = 'user'

const userRef = firebaseDb.ref('user')

function receiveUser(userObj) {
  return { type: types.RECEIVE_USER, userObj}
}

function continuePreviousGame(userObject) {
  return { type: types.WILL_USER_CONTINUE_GAME, userObject}
}

export function updateUserObject(updatedUserObj) {
  const updateRef = firebaseDb.ref('user').child(updatedUserObj.uid)
  updateRef.update(updatedUserObj)
}

export function getUserObj(userId) {
  let userObjRef = firebaseDb.ref('user').child(userId)
  userObjRef.off()
  userObjRef.on('value', snap => {
    let userObj = snap.val()
    store.dispatch(receiveUser(userObj))
  })
}

export function storeUserObj(userObj) {
  userRef.once('value', snap => {
    let object = snap.val()
    let keys = Object.keys(object)
    if(keys.includes(userObj.uid)){
      return store.dispatch(continuePreviousGame(userObj))
    } else {
      let myObj = {}
      myObj[userObj.uid] = userObj
      userRef.update(myObj)
    }
  })
  getUserObj(userObj.uid)
  store.dispatch(receiveUser(userObj))
}

function signInSuccess(result) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: result.user
  }
}

function signInError(err) {
  return {
    type: types.SIGN_IN_ERROR,
    payload: err
  }
}

function signOutSuccess() {
  return {
    type: types.SIGN_OUT_SUCCESS
  }
}

function signOutError(err) {
  return {
    type: types.SIGN_OUT_ERROR,
    payload: err
  }
}

export function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => {
        let userObj = {
          currentWaypoint: {},
          visitedWaypoints: 'no waypoints',
          uid: result.user.uid,
          userName: result.user.displayName,
          notebook: { note: "Sorry, You don't yet have any notes" },
          vouchers: 0
        }
        dispatch(signInSuccess(result))
        storeUserObj(userObj)
        }
      )
      .catch(err => dispatch(signInError(err)))
  }
}

export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  return authenticate(provider)
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(err => dispatch(signOutError(err)))
  }
}

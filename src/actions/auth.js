import firebase from 'firebase'
import * as types from './actionTypes'
import { firebaseAuth } from '../firebase'

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

export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  return authenticate(provider)
}

export function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(err => dispatch(signInError(err)))
  }
}

export function signOut(){
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(err => dispatch(signOutErr(err)))
  }
}



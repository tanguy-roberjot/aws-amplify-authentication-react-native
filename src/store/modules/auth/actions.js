export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess() {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
  };
}

export function signUpRequest(username, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, password },
  };
}

export function signUpSuccess(username) {
  return {
    type: '@auth/SIGN_CONFIRM',
    payload: { username },
  };
}

export function signUpConfirmRequest(username, code) {
  return {
    type: '@auth/SIGN_UP_CONFIRM_REQUEST',
    payload: { username, code },
  };
}

export function signUpConfirmSuccess(username) {
  return {
    type: '@auth/SIGN_CONFIRM_SUCCESS',
    payload: { username },
  };
}

export function signFailure(needConfirm, username) {
  if (needConfirm === true) {
    return {
      type: '@auth/SIGN_CONFIRM',
      payload: { username },
    };
  }

  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signUpFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

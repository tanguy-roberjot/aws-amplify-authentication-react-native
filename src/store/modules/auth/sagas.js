import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import NavigatorService from '~/services/navigator';

import {
  signInSuccess,
  signFailure,
  signUpFailure,
  signUpSuccess,
  signUpConfirmSuccess,
} from './actions';

export function* signIn({ payload }) {
  const { username, password } = payload;
  try {
    console.log('signing in');
    yield Auth.signIn({ username, password });
    yield put(signInSuccess());
  } catch (error) {
    if (error.code === 'UserNotConfirmedException') {
      Alert.alert(
        'Email not confirmed',
        'Please confirm it with the confirmation code that you have received by email'
      );
      yield put(signFailure(true, username));
    } else if (error.code === 'PasswordResetRequiredException') {
      Alert.alert('Password Expired ', 'Please create a new one.');
    } else if (
      error.code === 'NotAuthorizedException' ||
      error.code === 'UserNotFoundException'
    ) {
      Alert.alert(
        'User not found',
        'Please verify your email and password.'
      );
    } else {
      Alert.alert(
        'Login error',
        `(Error: ${error.message})`
      );
    }
    yield put(signFailure(false));
  }
}

export function* signOut() {
  try {
    yield Auth.signOut();
  } catch (err) {
    console.log(err);
  }
}

export function* signUp({ payload }) {
  const { username, password } = payload;
  try {
    yield Auth.signUp({
      username,
      password,
    });
    yield put(signUpSuccess(username));
    Alert.alert(
      'Account created',
      'Please enter the confirmation code that has been sent to you by email'
    );
  } catch (err) {
    console.log(err);
    if (err.code === 'UsernameExistsException') {
      Alert.alert(
        'Email already exists',
        'Please choose another email or sign in with this one.'
      );
    } else if (
      err.code === 'InvalidPasswordException' ||
      err.code === 'InvalidParameterException'
    ) {
      Alert.alert(
        'Invalid password',
        'Your password must have at least 8 characters.'
      );
    } else if (err.code === 'CodeDeliveryFailureException') {
      Alert.alert(
        'Error sending confirmation code',
        'Please try again later..'
      );
    } else if (err.code === 'InternalErrorException') {
      Alert.alert(
        'Internal server error',
        'Please try again later..'
      );
    } else {
      Alert.alert(
        'Error creating your account',
        'Please try again later..'
      );
    }
    //  console.tron.log(err);
    yield put(signFailure());
  }
}

export function* signConfirm({ payload }) {
  const { username } = payload;
  yield call(() =>
    NavigatorService.navigate('SignUpConfirm', {
      username,
    })
  );
}

export function* signConfirmRequest({ payload }) {
  const { username, code } = payload;

  try {
    yield Auth.confirmSignUp(username, code);
    yield put(signUpConfirmSuccess(username));
    Alert.alert('Confirmed', 'Email confirmed successfully.');
    yield call(() =>
      NavigatorService.navigate('SignIn', {
        username,
      })
    );
  } catch (err) {
    yield put(signFailure(false, username));
    Alert.alert(`Error in confirmation`);
  }
}

export function* initLoading() {
  yield put(signUpFailure());
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_CONFIRM', signConfirm),
  takeLatest('@auth/SIGN_UP_CONFIRM_REQUEST', signConfirmRequest),
  takeLatest('persist/REHYDRATE', initLoading),
]);

import produce from 'immer';

const initialState = {
  signed: false,
  loading: false,
  needConfirm: false,
};

export default (state = initialState, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_CONFIRM_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_CONFIRM_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_CONFIRM': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.loading = false;
        break;
      }
      default:
    }
  });
};

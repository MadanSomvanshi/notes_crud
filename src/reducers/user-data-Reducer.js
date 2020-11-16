import AppConstants from '../constants';

const initialState = {
  userCreds: [],
};

const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.SET_USER_DATA: {
      return { ...state, ...action.payload.data };
    }
    default:
      return state;
  }
};

export default UserDataReducer;

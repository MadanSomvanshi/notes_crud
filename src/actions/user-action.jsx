import AppConstants from "../constants";
import RequestService from "../service/request-service";
import apiEndpoints from '../constants/api-endpoints';

const { USER_CREDS } = apiEndpoints;

export const setData = (data) => {
  return {
    type: AppConstants.SET_USER_DATA,
    payload: {
      data,
    },
  };
}

export const setUserData = (obj) => {
  return (dispatch, getState) => {
    let userCreds = getState().UserDataReducer.userCreds || [];
    userCreds.push(obj);
    dispatch(setData(userCreds));
  };
}

export const getUserData = (obj) => {
    RequestService.fetch(USER_CREDS).then((response) => {
      const { status, data } = response;
      if (status === AppConstants.STATUS_CODES.STATUS_OK) {
        if (obj.userName === data.userName && obj.password === data.password) {
          return (dispatch, getState) => {
            let userCreds = getState().UserDataReducer.userCreds || [];
            userCreds.push(obj);
            dispatch(setData(userCreds));
          };
        }
      }
    })
  }


import AppConstants from '../constants';
import RequestService from '../service/request-service';

export const setData = (data) => {
  return ({
    type: AppConstants.SET_NOTES_DATA,
    payload: {
      data
    },
  });
}

export const setNotesDataWithExisting = (obj) => {
  return (dispatch, getState) => {
    let notesData = getState().NotesDataReducer.notesData || [];
    notesData.push(obj)
    dispatch(setData(notesData));
  }
}

export const getNotesData =(id) => {
  // const url = `http://content.guardianapis.com/search?api-key=test&q=${searchText}`;
  // return dispatch => RequestService.fetch(url)
  //   .then(({ data }) => {
  //     dispatch(setNewsData(data.response.results));
  //     return data.response.results;
  //   });
}

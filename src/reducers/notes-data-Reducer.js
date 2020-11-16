import AppConstants from '../constants';

const initialState = {
  notesData: [1,2,3,4],
};

const NotesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.SET_NOTES_DATA: {
      return {...state, ...action.payload.data}
    }
    default:
      return state;
  }
};

export default NotesDataReducer;

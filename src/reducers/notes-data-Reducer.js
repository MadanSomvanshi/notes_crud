import AppConstants from '../constants';

const initialState = {
  notesData: [],
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

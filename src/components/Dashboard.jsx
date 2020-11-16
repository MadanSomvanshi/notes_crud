import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setNotesDataWithExisting } from '../actions/notes-action';
import LeftNav from './Left';

const Dashboard = () => {
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const dispatch = useDispatch();
  const newsSuggetionsData = useSelector(state => state.NotesDataReducer.notesData);
  const [showNotesPanel, setShowNotesPanel] = useState(!!(newsSuggetionsData && newsSuggetionsData.length));

  const onSubmitButton = () => {
    const obj = { titleText, bodyText };
    dispatch(setNotesDataWithExisting(obj));
  }
  return (
    <div className="container dashBoardPage">
      {!showNotesPanel ?
      <button
        onClick={() => setShowNotesPanel(true)}
        className="btn btn-primary d-block ml-auto mb-2"
      >
        Add Note
      </button>
      : null
      }
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-xl-4 col-md-4">
          <LeftNav newsSuggetionsData={newsSuggetionsData || []} />
        </div>
        {showNotesPanel ? (
          <div className="col-xs-12 col-sm-12 col-xl-8 col-md-8 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <label className="text-left">Title: </label>
              <input
                type="text"
                value={titleText}
                onChange={e => setTitleText(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <label className="text-left">Body: </label>
              <input
                type="text"
                value={bodyText}
                onChange={e => setBodyText(e.target.value)}
                placeholder="body"
              />
            </div>
            <button onClick={onSubmitButton} className="btn btn-success">
              Submit
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;

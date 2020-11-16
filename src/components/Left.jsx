import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';

class LeftNav extends React.Component {
  render() {
    console.log("newsSuggetionsData: ", this.props.notesData)

    return (
      <ul className="listWrap">
        {this.props.newsSuggetionsData && this.props.newsSuggetionsData.length
          ? this.props.newsSuggetionsData.map((obj, index) => {
            return (
              <li key={`${index}${obj.titleText}`} className="listItem">
                {/* <span>{obj.titleText}</span>
                <span>{obj.bodyText}</span> */}
                <span>{obj}</span>
              </li>
            );
            })
          : null}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  notesData: state.NotesDataReducer.notesData,
});

export default connect(mapStateToProps)(LeftNav);

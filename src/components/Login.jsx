import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUserData} from "../actions/user-action";

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(
    state => state.UserDataReducer.userCreds
  );

  console.log("userData", userData);

  const onLoginClick = () => {
    const obj = { userName, password };
    dispatch(setUserData(obj));
    props.history.push('/dashboard') // TODO push only when received true from reducer
  };

  return (
    <div className="loginPage">
    <h2 className="text-center">LOGIN</h2>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-xl-8 col-md-8 text-center">
          <div className="d-flex justify-content-center align-items-center inputWrap">
            <label className="text-left">User Name: </label>
            <input
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center inputWrap">
            <label className="text-left">Password: </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button onClick={onLoginClick} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;

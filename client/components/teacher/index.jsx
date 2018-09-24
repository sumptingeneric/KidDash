import React from "react";
import { Router } from "@reach/router";
import ReactDOM from "react-dom";
import Navview from "./navbar/Navview.jsx";
import BulletinContainer from "./bulletinboard/BulletinContainer.jsx";
import MyBoard from "./myboard/MyBoardContainer.jsx";
import style from "../../../src/style.css";

const TeacherApp = props => {
  return (
    <div>
      <Navview handleLogOut={props.handleLogOut} />
      <Router>
        <MyBoard path="/" />
        {/* <Upload path="upload/*" />
        <Analytics path="analytics/*" /> */}
        <BulletinContainer path="bulletinboard" />
      </Router>
    </div>
  );
};

//ReactDOM.render(<TeacherApp />, document.getElementById("App"));
export default TeacherApp;

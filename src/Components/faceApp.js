import React from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { CgProfile, CgAdd } from "react-icons/cg";
import "./faceApp.css";
const FaceApp = () => {
  return (
    <div>
      <form>
        <div className="header">
          <AiOutlineMenu />
          {/* <img src="/img/welcome.jpg" className="welcome" /> */}

          <div className="leftHeader">
            <select>
              <option> Français</option>
              <option>Anglais</option>
            </select>
            <img src="/img/jdidi.jpg" className="photo" />
          </div>
        </div>
        <div className="center">
          <img src="/img/loginn.png" className="logoDTC" />
          <div className="containe">
            <h3>Development Technology Club</h3>
            <div className="listManagers">
              <div className="manager">
                <img src="/img/melek.jpg" className="photo1" />
                <p>this text is about the left photo</p>
              </div>
              <div className="manager">
                <img src="/img/marwaa.jpg" className="photo1" />
                <p>this text is about the left photo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <AiOutlineHome />
          <CgProfile />
          <CgAdd />
        </div>
      </form>
    </div>
  );
};

export default FaceApp;

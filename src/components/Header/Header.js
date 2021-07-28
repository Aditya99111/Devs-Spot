import React from "react";
import "./Header.css";
import BurgerMenu from "../Assets/menu-burger.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="container-fluid">
        <div className="d-flex align-items-cente py-2">
          <div className="ml-0" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"aria-controls="collapseExample">
            <img className="BurgerMenu" src={BurgerMenu} alt="BurgerMenu" />

          </div>
          <div className="ml-auto LogoutLabel">Logout</div>
        </div>
      </div>

          <div className="name">Devs-spot</div>
      <div className="collapse custom-collapse" id="collapseExample">
        <div className="card">
          <div className="card-body">
            <div className="ml-auto">Profile</div>
            <div className="ml-auto">Chat</div>
            <div className="ml-auto">Post</div>
            <div className="ml-auto">CratePost</div>
            <div className="ml-auto">Logout</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

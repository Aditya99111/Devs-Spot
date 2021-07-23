import React from "react";
import "./Header.css";
import BurgerMenu from "../Assets/menu-burger.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="container-fluid">
        <div className="d-flex align-items-cente py-2">
          <div
            className="ml-0"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img className="BurgerMenu" src={BurgerMenu} alt="BurgerMenu" />
          </div>
          <div className="ml-auto LogoutLabel">Logout</div>
        </div>
      </div>
      <div className="collapse custom-collapse" id="collapseExample">
        <div className="card  custom-card-container">
          <div className="card-body Nav-Items">
            <div className="ml-auto Nav-Items">Profile</div>
            <div className="ml-auto Nav-Items">Chat</div>
            <div className="ml-auto Nav-Items">Post</div>
            <div className="ml-auto Nav-Items">CratePost</div>
            <div className="ml-auto Nav-Items">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

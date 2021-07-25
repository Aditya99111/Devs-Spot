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
<<<<<<< HEAD

=======
>>>>>>> a1f9f61a4c4dfda78deba8bb0bd8057b8af31cc1
          </div>
          <div className="ml-auto LogoutLabel">Logout</div>
        </div>
      </div>
<<<<<<< HEAD
          <div className="name">Devs-spot</div>
      <div className="collapse custom-collapse" id="collapseExample">
        <div className="card">
          <div className="card-body">
            <div className="ml-auto">Profile</div>
            <div className="ml-auto">Chat</div>
            <div className="ml-auto">Post</div>
            <div className="ml-auto">CratePost</div>
            <div className="ml-auto">Logout</div>
=======
      <div className="collapse custom-collapse" id="collapseExample">
        <div className="card  custom-card-container">
          <div className="card-body Nav-Items">
            <div className="ml-auto Nav-Items">Profile</div>
            <div className="ml-auto Nav-Items">Chat</div>
            <div className="ml-auto Nav-Items">Post</div>
            <div className="ml-auto Nav-Items">CratePost</div>
            <div className="ml-auto Nav-Items">Logout</div>
>>>>>>> a1f9f61a4c4dfda78deba8bb0bd8057b8af31cc1
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

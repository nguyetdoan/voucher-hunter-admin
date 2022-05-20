import React, { useEffect } from "react";
import SearchBar from "../ui/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import uiActions from "../../actions/uiActions";
import MessagePopUp from "../ui/MessagePopUp";
import { UilBars } from "@iconscout/react-unicons";
import ProfilePopUp from "../ui/ProfilePopUp";

const messages = {
  list: [
    {
      imgUrl: "images/avt.jpeg",
      from: "Rock William",
      content:
        "Hi! Sir, How are you? I ask you one thing please explain in this price",
      time: "2 minute ago",
      isRead: false,
    },
    {
      imgUrl: "images/avt.jpeg",
      from: "Joy Dua",
      content:
        "Hi! Sir, How are you? I ask you one thing please explain in this price",
      time: "2 minute ago",
      isRead: false,
    },
    {
      imgUrl: "images/avt.jpeg",
      from: "Jass",
      content: "Thank sir! That's great",
      time: "2 minute ago",
      isRead: false,
    },
  ],
  new: 3,
};

const Header = () => {
  const { isShowedMessage, isShowedNotification } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(uiActions.closePopUp());
    });
  }, [dispatch]);

  const toggleMenu = () => {
    if (window.innerWidth <= 992) {
      document.querySelector(".side-bar").classList.toggle("show-menu");
    } else
      document.querySelector(".side-bar").classList.toggle("collapse-menu");
  };

  const toggleMessage = (e) => {
    e.stopPropagation();
    dispatch(uiActions.toggleMessage());
  };

  const toggleNotification = (e) => {
    e.stopPropagation();
    dispatch(uiActions.toggleNotification());
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    dispatch(uiActions.toggleProfile());
  };

  return (
    <nav>
      <div className="nav-left">
        <button
          className="btn btn-primary text-white collapse-menu-btn"
          onClick={toggleMenu}
        >
          <UilBars />
        </button>
        <div className="logo-container">
          <img src="images/logo.png" alt="logo" />
          <span>CURSUS</span>
        </div>
      </div>
      <SearchBar />
      <div className="nav-right">
        <button className="btn btn-primary text-white">
          Create New Voucher
        </button>
        <div className="nav-right__message">
          <div className="amount">
            <span>3</span>
          </div>
          <i className="bi bi-chat-left-heart" onClick={toggleMessage}></i>
          <MessagePopUp show={isShowedMessage} list={messages.list} />
        </div>
        <div className="nav-right__notification" onClick={toggleNotification}>
          <div className="amount">
            <span>3</span>
          </div>
          <i className="bi bi-bell"></i>
          <MessagePopUp show={isShowedNotification} list={messages.list} />
        </div>
        <div className="profile">
          <div className="avt-container">
            <img src="images/avt.jpeg" alt="" onClick={toggleProfile} />
          </div>
          <ProfilePopUp />
        </div>
      </div>
    </nav>
  );
};

export default Header;

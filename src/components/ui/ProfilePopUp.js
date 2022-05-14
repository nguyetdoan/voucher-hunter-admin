import React from "react";
import { useSelector } from "react-redux";

const ProfilePopUp = () => {
  const { isShowedProfile } = useSelector((state) => state.ui);

  return (
    <div
      className={`profile-pop-up${isShowedProfile ? " show" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="profile__info">
        <div className="avt-container">
          <img src="images/avt.jpeg" alt="" />
        </div>
        <div className="profile-info__txt">
          <p>Joginder Singh</p>
          <p>gambo943@gmail.com</p>
        </div>
        <div>
          <p>View Profile</p>
        </div>
      </div>

      <ul className="profile-menu">
        <li>Cursus Dashboard</li>
        <li>Setting</li>
        <li>Help</li>
        <li>Sign Out</li>
      </ul>
    </div>
  );
};

export default ProfilePopUp;

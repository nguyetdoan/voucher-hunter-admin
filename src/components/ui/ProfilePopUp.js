import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authActions from "../../actions/authActions";
import uiActions from "../../actions/uiActions";

const ProfilePopUp = () => {
  const { isShowedProfile } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.setLoading(true));

    setTimeout(() => dispatch(authActions.logout()), 500);
    navigate("/login");
  };

  const handleClickMenu = (link) => {
    navigate(link);
    dispatch(uiActions.toggleProfile());
  };

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
          <p>{user.fullName}</p>
          <p>{user.email}</p>
        </div>
        <div>
          <Link
            onClick={() => dispatch(uiActions.toggleProfile())}
            to="/"
            className="profile-link"
          >
            View Profile
          </Link>
        </div>
      </div>

      <ul className="profile-menu">
        <li onClick={() => handleClickMenu("/")}>Cursus Dashboard</li>
        <li onClick={() => handleClickMenu("/setting")}>Setting</li>
        <li onClick={handleLogout}>Sign Out</li>
      </ul>
    </div>
  );
};

export default ProfilePopUp;

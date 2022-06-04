import { UilApps, UilCog } from "@iconscout/react-unicons";
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="side-bar">
      <li>
        <NavLink to="/">
          <div className="icon">
            <UilApps />
          </div>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/vouchers">
          <div className="icon">
            <i className="bi bi-list-columns-reverse"></i>
          </div>
          Vouchers
        </NavLink>
      </li>
      <li>
        <NavLink to="/create_voucher">
          <div className="icon">
            <i className="bi bi-plus-circle"></i>
          </div>
          Create New Voucher
        </NavLink>
      </li>
      <li>
        <NavLink to="/messages">
          <div className="icon">
            <i className="bi bi-chat-left-heart"></i>
          </div>
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to="/notifications">
          <div className="icon">
            <i className="bi bi-bell"></i>
          </div>
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink to="/earning">
          <div className="icon">
            <i className="bi bi-currency-dollar"></i>
          </div>
          Earning
        </NavLink>
      </li>
      <li>
        <NavLink to="/payout">
          <div className="icon">
            <i className="bi bi-credit-card-2-back"></i>
          </div>
          Pay out
        </NavLink>
      </li>
      <li>
        <NavLink to="/statements">
          <div className="icon">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          Statements
        </NavLink>
      </li>
      <li>
        <NavLink to="/setting">
          <div className="icon">
            <UilCog />
          </div>
          Setting
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;

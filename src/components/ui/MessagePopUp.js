import React from "react";

const MessagePopUp = ({ show, list }) => {
  return (
    <div
      className={`message-pop-up${show ? " show" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="message-menu">
        {list.map(({ from, content, time }, index) => (
          <li key={`msg-${index}`}>
            <div className="avt-container">
              <img src="images/avt.jpeg" alt="" />
            </div>
            <div>
              <p className="fw-bold">{from}</p>
              <p>{content}</p>
              <p className="time">{time}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary">View All</button>
    </div>
  );
};

export default MessagePopUp;

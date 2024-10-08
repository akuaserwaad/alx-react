import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";
const Notifications = () => {
  const inlineStyles = {
    float: "right",
  }

  const clickEventHandler = () => {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={inlineStyles}
        onClick={clickEventHandler}
      >
        <img
          src={closeIcon}
          alt="close"
          style={{ width: "10px", height: "10px" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
};

export default Notifications;

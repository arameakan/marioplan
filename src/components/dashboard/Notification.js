import React from "react";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul>
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <h6 className="blue-text">{item.user}</h6>{" "}
                    <h6>{item.content}</h6>
                    <div className="grey-text note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;

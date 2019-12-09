import React from "react";
import faker from "faker";
import moment from "moment";

const PostItem = ({ id, content, created, children }) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">{faker.name.firstName()}</a>
        <div className="metadata">
          <span className="date">
            {moment(created).format("DD.MM.YYYY HH:mm:ss")}
          </span>
        </div>
        <div className="text">{content}</div>
        <div className="actions">{children}</div>
      </div>
    </div>
  );
};

export default PostItem;

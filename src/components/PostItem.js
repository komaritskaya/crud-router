import React from "react";
import faker from "faker";
import moment from "moment";

const PostItem = ({ id, content, created, children }) => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </div>
      <div className="content">
        <span href="#" className="author">
          {faker.name.firstName()}
        </span>
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

import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import PostItem from "./PostItem";

class PostsList extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.getPosts();
  }
  setData = posts => {
    this.setState({ posts });
  };
  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_POSTS_URL}/posts`)
      .then(response => this.setData(response.data));
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="ui comments">
        {posts.map(post => (
          <PostItem key={post.id} {...post}>
            <Link to={`/posts/${post.id}`} className="reply">
              Просмотр
            </Link>
          </PostItem>
        ))}
      </div>
    );
  }
}

export default PostsList;

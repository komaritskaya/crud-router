import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import PostItem from "./PostItem";
import AddForm from "./AddForm";
import Page404 from "./Page404";

class ViewPostPage extends React.Component {
  state = {
    post: null,
    deleted: false,
    editing: false
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = Number(params.id);
    axios.get(`${process.env.REACT_APP_POSTS_URL}/posts`).then(response => {
      const post = response.data.find(item => item.id === id);
      this.setState({ post });
    });
  }

  toggleEditing = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }));
  };

  handleDelete = () => {
    const {
      match: { params }
    } = this.props;

    axios
      .delete(`${process.env.REACT_APP_POSTS_URL}/posts/${params.id}`)
      .then(() => this.setState({ deleted: true }))
      .catch(error => {
        console.log(error.message);
      });
  };

  handleEdit = value => {
    axios
      .post(`${process.env.REACT_APP_POSTS_URL}/posts`, {
        id: this.state.post.id,
        content: value
      })
      .then(() => this.props.history.go(0))
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const { post, deleted, editing } = this.state;

    if (!post) {
      return <Page404 />;
    }

    if (deleted) {
      return <Redirect to="/" />;
    }

    if (editing) {
      return <AddForm content={post.content} onSubmit={this.handleEdit} />;
    }

    return (
      <>
        <div className="ui comments">
          <PostItem {...post}>
            <button className="reply" onClick={this.toggleEditing}>
              Edit
            </button>
            <button className="reply" onClick={this.handleDelete}>
              Delete
            </button>
          </PostItem>
        </div>
      </>
    );
  }
}

export default ViewPostPage;

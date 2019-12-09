import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PostsList from "./components/PostsList";
import AddPostPage from "./components/AddPostPage";
import ViewPostPage from "./components/ViewPostPage";
import Page404 from "./components/Page404";

class App extends React.Component {
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <Router>
          <div className="ui basic segment">
            <div className="ui secondary menu">
              <Link to="/" className="ui icon button">
                <i className="home icon"></i>
              </Link>
              <Link to="/posts/new" className="ui button">
                Создать пост
              </Link>
            </div>
          </div>
          <div className="ui basic segment">
            <Switch>
              <Route path="/posts/new" component={AddPostPage} />
              <Route path="/posts/:id" component={ViewPostPage} />
              <Route path="/" exact component={PostsList} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

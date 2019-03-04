import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      view: 'list',
      viewPost: {}
    };
    this.api = 'http://localhost:3001/posts/';
    this.fetchPost(1);
  }

  fetchPost = async pageNo => {
    const request = await fetch(this.api + pageNo, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: { "pesto-password": "darth vader", }
    });
    const postsObj = await request.json();
    const allPosts = postsObj.data;
    this.setState({ posts: allPosts, page: pageNo });
  }
  handlePrevClick = () => {
    this.fetchPost(this.state.page - 1);
  }

  handleNextClick = () => {
    this.fetchPost(this.state.page + 1);
  }

  handleViewPost = async (id) => {
    const request = await fetch(`http://localhost:3001/post/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: { "pesto-password": "darth vader", }
    });
    const postObj = await request.json();
    const mainPost = postObj.data;
    this.setState({ viewPost: mainPost, view: 'post' });
  }

  render() {
    if (this.state.view === 'list') {
      return (
        <div>
          <h2>Posts</h2>
          <hr />
          <br />
          <button onClick={this.handlePrevClick}>
            Previous
          </button>
          <button onClick={this.handleNextClick}>
            Next
          </button>
          <div>
            {this.state.posts.map((post) => {
              return (
                <Fragment key={post.id}>
                  <Post post={post} onClick={this.handleViewPost} />
                  <hr />
                </Fragment>
              );
            })}
          </div>
        </div>
      );
    }
    else {
      return (<div>{this.state.viewPost}</div>)
    }
  }
}

export default App;

import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.pageNo ? null : localStorage.setItem('pageNo', 1);
    this.state = {
      posts: [],
    };
    this.fetchPosts();
  }
  fetchPosts = () => {
    const pageNo = localStorage.getItem('pageNo');
    fetch(`http://localhost:3001/posts/${pageNo}`, {
      headers: {
        'pesto-password': 'darth vader',
      },
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      });
  }
  handleNextClick = () => {
    const currPageNo = parseInt(localStorage.getItem('pageNo'));
    localStorage.setItem('pageNo', currPageNo + 1);
    this.fetchPosts();
  }
  handlePrevClick = () => {
    const currPageNo = parseInt(localStorage.getItem('pageNo'));
    if (currPageNo > 1) {
      localStorage.setItem('pageNo', currPageNo - 1);
      this.fetchPosts();
    }
  }

  render() {
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
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      post: {
        id: '',
        title: '',
        body: '',
      },
      done: false
    };
    this.fetchPostById(this.state.id);
  }
  fetchPostById = (id) => {
    fetch(`http://localhost:3001/post/${id}`, {
      headers: {
        'pesto-password': 'darth vader',
      },
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          post: res.data,
          done: true,
        });
      });
  }
  render() {
    const done = this.state.done;
    return (
      <div>
        <h4>{this.state.post.id}</h4>
        <div>Title: {this.state.post.title}</div>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}

export default ViewPost;

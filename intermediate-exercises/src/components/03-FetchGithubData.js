import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos  }) => {
  const formatRepo = (repo) => {
    return `Repo Name: ${repo.full_name} `;
  }
  return (
    <ul>
      {/* Task: The list of repos here */
        [...repos.map((repo) => {
          return <li>{formatRepo(repo)}</li>
        })]
      }
    </ul>
  );
}

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {

};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
  }

  getUserName(event) {
    this.setState({ username: event.target.value });
  }
  async getUserRepo() {
    try {
      const userDataToFetch = this.state.username;
      const url = `https://api.github.com/users/${userDataToFetch}/repos`;
      const response = await axios.get(url);
      const repoData = response && response.data;
      console.log(response);
      this.setState({ repos: repoData });
    } catch (error) {
      console.error(error);
    }
  }
  renderRepoData() {
    if (this.state.repos.length > 0) {
      return GithubRepos({ repos: this.state.repos });
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.getUserName.bind(this)}
        />
        <button
          onClick={this.getUserRepo.bind(this)}
        >
          Get Repos
        </button>
        {
          this.renderRepoData()
          /* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */}
      </div>
    );
  }
}

export default UsernameForm;

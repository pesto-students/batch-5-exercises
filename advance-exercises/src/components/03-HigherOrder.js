/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from "react";
import PropTypes from "prop-types";

const withMouse = Component => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mousePosition: null
      };
    }

    onMouseMove = (event) => {
      this.setState({ mousePosition: { x: event.clientX, y: event.clientY } });
    }

    render() {
      const { mousePosition } = this.state;
      return <Component mouse={mousePosition} onMouseMove={this.onMouseMove} />;
    }
  }
  return HOC;
};

class App extends React.Component {
  render() {
    const { mouse, onMouseMove } = this.props;

    return (
      <div className="container" onMouseMove={onMouseMove}>
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
            <h1>We don&#39;t know the mouse position yet :(</h1>
          )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;

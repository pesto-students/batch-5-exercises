/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  class WithMouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          xCoordinate: 0,
          yCoordinate: 0
        }
      };
      this.mouseDrag = this.mouseDrag.bind(this);
    }

    mouseDrag(event) {
      this.setState({
        mouse: {
          xCoordinate: event.clientX,
          yCoordinate: event.clientY 
        },
      });
    }
    render() {
      const { mouse } = this.state;
      return ( <div mouseDrag={this.mouseDrag}>
              <Component mouse={ mouse } />
              </div>
      )
    }
  }
  return WithMouse;
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.xCoordinate}, {mouse.yCoordinate})
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
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;

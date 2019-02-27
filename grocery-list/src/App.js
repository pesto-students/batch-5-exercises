import React from 'react';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      newGroceryItem: ''
    };
  }

  handleInput = (event) => {
    this.setState({
      newGroceryItem: event.target.value
    });
  }
  addNewItem = () => {
    const { groceries, newGroceryItem } = this.state;
    if (newGroceryItem.length > 0) {
      this.setState({
        groceries: [...groceries, newGroceryItem],
        newGroceryItem: ''
      });
    }
  }
  clearList = () => {
    this.setState({
      groceries: [],
    })
  }
  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map( item => ( 
      <GroceryItem grocery={item} />
    ));
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <input type="text" onChange={this.handleInput} value={this.state.newGroceryItem}/>
        <br></br>
        <button onClick={this.addNewItem}>Add</button>
        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemColor: 'black',
    }
  }

  changeItemColour = () => {
    if (this.state.itemColor === 'black') {
      this.setState({
        itemColor : 'red'
      })
    } else {
      this.setState({
        itemColor: 'black'
      })
    }
  }

  render() {
    // Have to get the element and change the color
    return (
      <li onClick={this.changeItemColour}>
        {this.props.grocery}
      </li>
    );
  }
}

// const App = () => (
//   <div>App</div>
// );

export default App;

import React from 'react';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      newItem: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  handleInput(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  addItem() {
    const { groceries, newItem } = this.state;
    if (newItem.length > 0) {
      this.setState({
        groceries: [...groceries, { name: newItem }],
        newItem: ''
      });
    }
  }
  clearList() {
    this.setState({
      groceries: []
    });
  }
  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map((item, i) => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={i} grocery={item} />
    ));
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <input type="text" onChange={this.handleInput} value={this.state.newItem} />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false
    }
    this.togglePurchase = this.togglePurchase.bind(this);
  }
  togglePurchase() {
    const purchased = this.state.purchased;
    this.setState({
      purchased: !purchased
    });
  }
  render() {
    const isPurchased = this.state.purchased;
    const classList = `${isPurchased ? 'purchased' : 'available'}`;
    return (
      <li className={classList} onClick={this.togglePurchase}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;

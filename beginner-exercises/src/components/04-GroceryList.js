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
      inputGrocerie: '',
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
  }
  clearGroceries = () => {
    this.setState({ groceries: [] });
  }

  addGrocery = (event) => {
    event.preventDefault();
    this.setState({ groceries: [...this.state.groceries, { name: this.state.inputGrocerie }] });
    this.setState({ inputGrocerie: '' });
  }

  handleChange = (event) => {
    this.setState({ inputGrocerie: event.target.value });
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
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <form onSubmit={this.addGrocery}>
          <label>
            <input type="text" name="groceries" value={this.state.inputGrocerie} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Grocerie" />
        </form>
        <button onClick={this.clearGroceries}>Clear Groceries</button>
        <ul>
          {groceriesComponents}
        </ul>
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
    this.state = { color: 'black' };
  }

  buy = (event) => {
    var newColor = this.state.color == 'black' ? 'red' : 'black';
    this.setState({ color: newColor })
  }

  render() {
    return (
      <li style={{ color: this.state.color }} onClick={this.buy}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;

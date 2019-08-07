import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groceryItems = this.props.groceries.map(item => {
      const { name, quantity } = item;
      return (
        <li key={name}>
          <span>{name + ' '}</span>
          <span>{quantity}</span>
        </li>
      );
    });
    return <ul className="groceries">{groceryItems}</ul>;
  }
}

export default GroceryList;
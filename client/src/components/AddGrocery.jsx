import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      quantity: '',
    }
    
  }

  handleClick(e) {
    if (this.props.onAdd) {
      this.props.onAdd(this.state.item);
    }
  }
//TO INPROVE
  handleChange(e) {
    if (typeof e === string) {
      this.setState(item = e.target.value)
    }else if (typeof e === number) {
      this.setState(quantity = e.target.value)
    }
  }

  render() {
    return (
      <div className="groceries">
        <input
          name="item"
          type="text"
          placeholder="Add Items"
          onChange={this.handleChange.bind(this)}>
        </input>
        <input
          name="number of items"
          type="number"
          placeholder="Add Quantity"
          onChange={this.handleChange.bind(this)}>
        </input>
        <button
          onClick={this.handleClick.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}










export default AddGrocery;
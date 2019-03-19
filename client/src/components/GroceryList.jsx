import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="groceries">
        {//this.props.item.map((item) => <GroceryItems item={item} />)
        }
      </div>
    );
  }
}

export default GroceryList;
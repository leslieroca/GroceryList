import React from 'react';
import GroceryItems from './GroceryItems.jsx';
import AddGrocery from './AddGrocery.jsx';
import GroceryList from './GroceryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [], 
    }
  }

  handleAdd(item) {
    if (item) {
      let temp = this.state.groceries.slice();
      temp.push(item)
      this.setState({groceries: temp})
    }
  }

  render() {
    return (
      <div className="groceries">
        <GroceryItems />
        <AddGrocery onAdd={this.handleAdd.bind(this)}/>
        {/* <GroceryList  item={}/> */}
      </div>
    );
  }
}

export default App;

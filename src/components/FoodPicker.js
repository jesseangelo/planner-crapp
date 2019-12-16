import React from 'react';

class FoodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //foods: props.foods
    }

    this.selectFood = this.props.selectFood.bind(this);
  }
  render() {
    let selectFood = this.props.selectFood;
    let foodList = this.props.foods.map(function(food, i) {
      return (
        // <option value={food}>{food}</option>
        <li key={i}><a onClick={selectFood} value={food}>{food}</a></li>
        //<li key={i}><a onClick={selectFood.bind(this, i, this.props)} value={food}>{food}</a></li>
      );
    });

    return (
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          {this.props.type}&nbsp;<span className="caret"></span>
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
          {foodList}
        </ul>
      </div>
      // <div>
      //   <select>
      //     {foodList}
      //   </select>
      // </div>
    );
  }
}


export default FoodPicker;
import React from 'react';
import FoodPicker from './FoodPicker';

class Input extends React.Component {
  render() {
    return (
      <div className='col-xs-3'>
        <h5>Input</h5>
        <FoodPicker type="P" foods={this.props.proteinList} selectFood={this.props.selectProtein}/>
        &nbsp;
        <FoodPicker type="C" foods={this.props.carbList} selectFood={this.props.selectCarb}/>
      </div>
    );
  }
}

export default Input;
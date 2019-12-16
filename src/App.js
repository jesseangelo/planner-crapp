import React from 'react';
import './App.css';
import Meal from './components/Meal'
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carbs: props.carbs,
      proteins: props.proteins
    };
    //this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Meal mealName="El Desayuno" carbList={this.state.carbs} proteinList={this.state.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="El Lunch" carbList={this.state.carbs} proteinList={this.state.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Cena" carbList={this.state.carbs} proteinList={this.state.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Merienda" carbList={this.state.carbs} proteinList={this.state.proteins} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  carbs: PropTypes.array,
  proteins: PropTypes.array,
  //fats: PropTypes.array
};
App.defaultProps = {
  carbs: ['pasta', 'oatmeal', 'Lucky Charms'],
  proteins: ['pork', 'chicken', 'bison'],
 // fats: [],
};

export default App;

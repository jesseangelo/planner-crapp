import React from 'react';
import './App.css';
import Meal from './components/Meal'
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Meal mealName="El Desayuno" carbList={this.props.carbs} proteinList={this.props.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="El Lunch" carbList={this.props.carbs} proteinList={this.props.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Cena" carbList={this.props.carbs} proteinList={this.props.proteins} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Merienda" carbList={this.props.carbs} proteinList={this.props.proteins} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  carbs: PropTypes.array,
  proteins: PropTypes.array,
  fats: PropTypes.array
};
App.defaultProps = {
  carbs: ['pasta', 'oatmeal', 'Lucky Charms'],
  proteins: ['pork', 'chicken', 'bison'],
  fats: [],
};

export default App;

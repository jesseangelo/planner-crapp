import React from 'react';
import Output from './Output';
import Input from './Input';

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCarbs: props.selectedCarbs,
      selectedProteins: props.selectedProteins
    };

    //functions
    this.selectCarb = this.selectCarb.bind(this);
    this.selectProtein = this.selectProtein.bind(this);
  }
  selectCarb(e){
    this.setState({
      selectedCarbs: [e.target.text]
    });
  }
  selectProtein(e){
    this.setState({
      selectedProteins: [e.target.text]
    });
  }
  render() {
    return (
      <div>
        <div className="col-xs-12">
          <h4>{this.props.mealName}</h4>
        </div>
        <Input carbList={this.props.carbList}
          selectCarb={this.selectCarb}
          proteinList={this.props.proteinList}
          selectProtein={this.selectProtein}
        />
        <Output selectedCarbs={this.state.selectedCarbs}
          selectedProteins={this.state.selectedProteins}
        />
      </div>
    );
  }
}

Meal.propTypes = {
  selectedCarbs: React.PropTypes.array,
  selectedProteins: React.PropTypes.array
};
Meal.defaultProps = {
  selectedCarbs: [''],
  selectedProteins: ['']
};


export default Meal;
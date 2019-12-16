import React from 'react';

class Output extends React.Component {
  render() {
    return (
      <div className='col-xs-9'>
        Output<br />
        {this.props.selectedCarbs}&nbsp;{this.props.selectedProteins}
      </div>
    )
  }
}

export default Output;
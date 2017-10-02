import React from 'react';
import PropTypes from 'prop-types';


class EventVoteDisc extends React.Component {

  render(){
    var options = this.props.options.map((option, index )=>
      <div key={index} className="row" onClick={this.props.onClick} id = {option[0]} value = {option[1]} >
        <button type="button" className = "btn btn-default custom-button">
        <h3 className="col-xs-6">{option[0]}:</h3>
        <h3 className="col-xs-6">{option[1]}</h3>
        </button>
      </div>);
    return (

      <div>
        {options}
      </div>
    );
  }
}

EventVoteDisc.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default EventVoteDisc;

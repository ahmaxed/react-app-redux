import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class EventInMyEvents extends React.Component {
  render(){
    const { title, _id } = this.props.event;
    return (
      <Link to={`/event/${_id}`}>
        <div
          className={classnames( 'alert','alert-info')}>
          <button onClick={this.onClick} className="close"><span>&times;</span></button>
          {title}
        </div>
      </Link>
    );
  }
}

EventInMyEvents.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventInMyEvents;

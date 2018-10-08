import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

class Experience extends React.Component {

  render() {
    const experience = this.props.experience.map(exp => {
        const toDate = exp.current ? 'current' : <Moment format="YYYY">{exp.to}</Moment>

        return (
            <tr key={exp._id}>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY">{exp.from}</Moment> - {toDate}
                </td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        )
    })

    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Game Title</th>
                        <th>Date</th>
                    </tr>
                    {experience}     
                </thead>    
            </table>
      </div>
    )
  }
}

Experience.propTypes = {

}

export default connect(null)(withRouter(Experience));

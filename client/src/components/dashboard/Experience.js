import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends React.Component {
    onDeleteClick(id) {
        // console.log(id)
        this.props.deleteExperience(id)
    }

  render() {
    const experience = this.props.experience.map(exp => {
        const toDate = exp.current ? 'current' : <Moment format="YYYY">{exp.to}</Moment>

        return (
            <tr key={exp._id}>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY">{exp.from}</Moment> - {toDate}
                </td>
                <td><button onClick={this.onDeleteClick.bind(this, exp._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    })

    return (
      <div>
        <h4 className="mb-4">Game Experiences</h4>
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
    deleteExperience: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    deleteExperience: (id) => dispatch(deleteExperience(id))
})

export default connect(null, mapDispatchToProps)(Experience);

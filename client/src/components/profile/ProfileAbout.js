import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';


class ProfileAbout extends React.Component {
  
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0]
    const lastName = profile.user.name.trim().split(' ')[1] || ""

    const gameTypes = profile.skills.map((skill, i) => (
      <div key={i} className="p-3">
        <i className="fa fa-check">
          {skill}
        </i>
      </div>
    ))

    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-light mb-3">
            <h3 class="text-center text-info">About {firstName} {lastName[0]}:</h3>
            <p class="lead">{isEmpty(profile.bio) ? <span>{firstName} has not filled in his bio</span> : (<span>{profile.bio}</span>)}
                </p>
            <hr />
            <h3 class="text-center text-info">Game types played:</h3>
            <div class="row">
              <div class="d-flex flex-wrap justify-content-center align-items-center">
                {gameTypes}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProfileAbout;
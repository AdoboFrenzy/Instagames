import React from 'react';
import { Link } from 'react-router-dom';

class ProfileActions extends React.Component {

    render() {
        const { user, profile } = this.props;
        // console.log(this.props)

        let profileContent3;

        if(profile.bio) {
            profileContent3 = <div>{user.name}'s Bio: <br/><span>{profile.bio}</span></div>
        } else {
            profile.bio = null
        }

        return (
          <div className="profile" role="group">
              <div className="profile-pic">
                  <img
                      className="rounded-circle"
                      src={user.avatar}
                      alt={user.name}
                      style={{ width: '152px', marginRight: '5px' }}
                      title="Profile Image" />
              </div>
              <div className="profile-content">
                    <div className="profile-content-1">
                        <h1>{user.name}</h1>

                        <Link to="edit-profile" className="edit-profile btn btn-light">Edit Profile</Link>
        
                        <Link to="" className="logout"><i className="fas fa-sign-out-alt"></i></Link>
                        {/* <Link to="add-experience" className="btn btn-light">
                            <i className="fab fa-black-tie text-info mr-1"></i>
                            Add Game Experience</Link> */}
                        {/* <Link to="add-education" className="btn btn-light">
                            <i className="fas fa-graduation-cap text-info mr-1"></i>
                            Add Education</Link> */}
                    </div>

                    <div className="profile-content-2">
                        <ul>
                            <li><span>42 Posts</span></li>
                            <li><span>100 Followers</span></li>
                            <li><span>200 Following</span></li>
                        </ul>
                    </div>

                    <div className="profile-content-3">
                        {profileContent3}
                    </div>

              </div>
          </div>
        )
    }
}

export default ProfileActions;
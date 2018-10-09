import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/spinner';
import { mapStateToProps, mapDispatchToProps } from "./ProfileContainer"

class Profile extends React.Component {

    componentWillMount() {
        console.log(this.props)
        console.log(this.props.match.params.handle)
    }

    componentDidMount() {
        if(this.props.match.params.handle) {

            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if(profile === null || loading) {
        profileContent = <Spinner />
    } else {
        profileContent = (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/profiles" className="btn btn-light mb-3 float-left"> Back To Gamer Profiles </Link>
                    </div>
                    <div className="col-md-6" />
                </div>
                <ProfileHeader profile={profile}/>
                <ProfileAbout profile={profile}/>

            </div>
        )
    }

    return (
      <div className="profile">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {profileContent}
                </div>
            </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
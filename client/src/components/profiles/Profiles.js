import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/spinner';
import ProfileItem from './ProfileItem';

import { mapStateToProps, mapDispatchToProps } from './ProfilesContainer';

class Profiles extends React.Component {
    componentDidMount() {
        this.props.getProfiles();
    }


  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if(profiles === null || loading) {
        profileItems = <Spinner />
    } else {
        if(profiles.length > 0) {
            profileItems = profiles.map(profile => (

                <ProfileItem key={profile._id} profile={profile} />
            ))
            
        } else {
            profileItems = <h4>No profiles found...</h4>
        }
    }

    return (
      <div className="profiles">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Find other Gamers!</h1>
                    <p className="lead text-center">
                        Browse and connect with other Gamers.
                    </p>
                    { profileItems }
                </div>
            </div>
        </div>
      </div>
    )
  }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
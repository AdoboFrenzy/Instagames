import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './DashboardContainer';
import Spinner from '../common/spinner';
import ProfileActions from './profileActions';
import Buttons from './Buttons';
import Experience from './Experience';
import Posts from './Posts/Posts';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getCurrentProfile();
        this.props.getCurrentUserPosts();
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        const { posts } = this.props;

        let dashboardContent;

        if(profile === null || loading) {
            dashboardContent = <Spinner />
        } else {
            // Check if logged in user has profile data
            if(Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div>
                        {/* <p className="lead text-muted">
                            <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
                        </p> */}
                        <ProfileActions 
                            user={user} 
                            profile={profile} 
                            logoutUser={this.logoutUser.bind(this)} 
                            deleteAccount={this.onDeleteClick.bind(this)} 
                            posts={posts}
                            />
                        <Buttons />
                        <Posts posts={posts} />

                        {/* <Experience experience={profile.experience} /> */}

                        {/* <div style={{ marginBottom: '60px' }} /> */}
                        {/* <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button> */}
                    </div>
                )
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome { user.name }!</p>
                        <p>You have not created a profile. Please create one!</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info btn-createprofile">
                            Create Profile
                        </Link>
                    </div>
                )
            }
        }

        return (
            <div className="dashboard create-profile-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="">
                            {/* <h1 className="display-4">
                                Dashboard
                            </h1> */}
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));

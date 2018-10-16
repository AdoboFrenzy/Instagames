import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './containers/LandingContainer'; 

class Landing extends React.Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('./dashboard')
        }
    }

    render() {
        return (
        <div>
            <div className="landing">
                <div className="light-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left">
                                <h1 className="display-3 text-dark mb-4">Instagames
            </h1>
                                <p className="text-dark lead"> Share screenshots of Epic moments and create your gamer profile. </p>
                                <hr />
                                {/* <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link> */}
                                <Link to="/login" className="btn btn-lg btn-light btn-start">Get Started!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
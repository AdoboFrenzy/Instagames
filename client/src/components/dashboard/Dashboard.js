import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './DashboardContainer';
// import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));

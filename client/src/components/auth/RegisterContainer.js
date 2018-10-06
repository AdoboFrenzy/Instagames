// import { connect } from 'react-redux';
// import React from 'react';
// import Register from './Register'
import { registerUser } from '../../actions/authActions';

export const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    registerUser: (newUser, history) => dispatch(registerUser(newUser, history))
});



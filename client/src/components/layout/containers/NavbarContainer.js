import { logoutUser } from '../../../actions/authActions';

export const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
});
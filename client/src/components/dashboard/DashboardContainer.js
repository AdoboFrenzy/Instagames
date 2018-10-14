import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import { logoutUser } from '../../actions/authActions';

export const mapStateToProps = (state, ownProps) => ({
    profile: state.profile,
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    getCurrentProfile: () => dispatch(getCurrentProfile()),
    deleteAccount: () => dispatch(deleteAccount()),
    logoutUser: () => dispatch(logoutUser())
});


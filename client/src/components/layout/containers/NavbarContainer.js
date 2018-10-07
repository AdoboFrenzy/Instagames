import { logoutUser } from '../../../actions/authActions';
import { clearCurrentProfile } from '../../../actions/profileActions';

export const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
    clearCurrentProfile: () => dispatch(clearCurrentProfile())
});
import { getCurrentProfile } from '../../actions/profileActions';

export const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    getCurrentProfile: () => dispatch(getCurrentProfile())
});


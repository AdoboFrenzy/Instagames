import { getCurrentProfile, deleteAccount, clearCurrentProfile } from '../../actions/profileActions';
import { getCurrentUserPosts } from '../../actions/postActions';
import { logoutUser } from '../../actions/authActions';

export const mapStateToProps = (state, ownProps) => ({
    profile: state.profile,
    auth: state.auth,
    errors: state.errors,
    posts: state.post.posts.filter((post) => post.user === state.auth.user.id)
});

export const mapDispatchToProps = (dispatch) => ({
    getCurrentProfile: () => dispatch(getCurrentProfile()),
    deleteAccount: () => dispatch(deleteAccount()),
    logoutUser: () => dispatch(logoutUser()),
    clearCurrentProfile: () => dispatch(clearCurrentProfile()),
    getCurrentUserPosts: () => dispatch(getCurrentUserPosts())
});


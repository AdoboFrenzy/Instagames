import { getPosts } from '../../actions/postActions';
import { getProfiles } from '../../actions/profileActions';

export const mapStateToProps = (state) => ({
    post: state.post,
    profiles: state.profile.profiles
})

export const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getProfiles: () => dispatch(getProfiles())
})
import { getProfileByHandle } from '../../actions/profileActions';

export const mapStateToProps = (state) => ({
    profile: state.profile
})

export const mapDispatchToProps = dispatch => ({
    getProfileByHandle: (handle) => dispatch(getProfileByHandle(handle))
})
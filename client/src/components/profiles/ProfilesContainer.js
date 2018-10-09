import { getProfiles } from '../../actions/profileActions';

export const mapStateToProps = state => ({
    profile: state.profile
})

export const mapDispatchToProps = dispatch => ({
    getProfiles: () => dispatch(getProfiles())
})
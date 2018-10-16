import { createProfile, getCurrentProfile } from '../../actions/profileActions'

export const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    errors: state.errors
})

export const mapDispatchToProps = (dispatch) => {

    return ({
        createProfile: (profileData, history) => dispatch(createProfile(profileData, history)),
        getCurrentProfile: () => dispatch(getCurrentProfile())
    })
}
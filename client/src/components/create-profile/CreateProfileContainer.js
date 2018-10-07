import { createProfile } from '../../actions/profileActions'

export const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
})

export const mapDispatchToProps = (dispatch) => {

    return ({
        createProfile: (profileData, history) => dispatch(createProfile(profileData, history))
    })
}
import { getProfileByHandle } from '../../actions/profileActions';

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = dispatch => ({
    getProfileByHandle: (handle) => dispatch(getProfileByHandle(handle))
})
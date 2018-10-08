import { addExperience } from '../../actions/profileActions';

export const mapStateToProps = (state, ownProps) => ({
    profile: state.profile,
    errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
    addExperience: (expData, history) => dispatch(addExperience(expData, history))
});



import { loginUser } from '../../actions/authActions';

export const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    errors: state.errors
});

export const mapDispatchToProps = ({
    loginUser: (userData) => loginUser(userData)
});



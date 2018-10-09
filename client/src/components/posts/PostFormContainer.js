import { addPost } from '../../actions/postActions';

export const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export const mapDispatchToProps = dispatch => ({
    addPost: (postData) => dispatch(addPost(postData))
})
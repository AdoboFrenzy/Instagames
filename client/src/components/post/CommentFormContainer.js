import { addComment, getPost } from '../../actions/postActions';

export const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export const mapDispatchToProps = dispatch => ({
    addComment: (id, commentData) => dispatch(addComment(id, commentData)),
    getPost: (id) => dispatch(getPost(id))
})
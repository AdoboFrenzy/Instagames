import { getPost } from '../../actions/postActions';

export const mapStateToProps = (state) => ({
    post: state.post
})

export const mapDispatchToProps = dispatch => ({
    getPost: (id) => dispatch(getPost(id))
})
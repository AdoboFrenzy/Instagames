import { getPosts } from '../../actions/postActions';

export const mapStateToProps = (state) => ({
    post: state.post
})

export const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts())
})
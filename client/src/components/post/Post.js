import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import { mapStateToProps, mapDispatchToProps } from './PostContainer';

class Post extends React.Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if(post === null || loading || Object.keys(post).length === 0) {
        postContent = <Spinner />
    } else {
        postContent = (
            <div>
                <PostItem post={post} showActions={false} />
                {/* <CommentForm postId={post._id} /> */}
                {/* <CommentFeed postId={post._id} comments={post.comments} /> */}
            </div>
        );
    }

    return (
      <div className="post">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                        <Link to="/feed" className="btn btn-light mb-3">
                            Back to Feed
                        </Link>
                        {postContent}
                </div>
            </div>

        </div>
      </div>
    )
  }
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
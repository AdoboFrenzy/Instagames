import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends React.Component {
  render() {

    const { posts, profiles } = this.props;

    return (
      posts.map((post) => <PostItem key={post._id} post={post} profiles={profiles} />)
    )
  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostFeed;
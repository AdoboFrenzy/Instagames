import React from 'react';
import PostItem from './PostItem';

class Posts extends React.Component {
  render() {
    const { posts } = this.props;
    let postContent1;
    let postContent2;
    let postContent3;
    let postContent4;

    if (posts === null) {
      // postContent = <Spinner />;
    } else {
      postContent1 = posts.slice(0, 3).map((post, i) => <PostItem key={post._id} post={post} col={i%3} /> )
      postContent2 = posts.slice(3, 6).map((post, i) => <PostItem key={post._id} post={post} col={i%3} /> )
      postContent3 = posts.slice(6, 9).map((post, i) => <PostItem key={post._id} post={post} col={i%3} /> )
      postContent4 = posts.slice(9, 12).map((post, i) => <PostItem key={post._id} post={post} col={i%3} /> )
    }

    return (
      <div>
        <div className="dashboard-img-feed">{postContent1}</div>
        <div className="dashboard-img-feed">{postContent2}</div>
        <div className="dashboard-img-feed">{postContent3}</div>
        <div className="dashboard-img-feed">{postContent4}</div>

      </div>
    )
  }
}

export default Posts;
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends React.Component {

    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    onLikeClick(id) {
        const { post, auth } = this.props;

        let postLikes = post.likes.map(like => like.user);
        let currentUserId = auth.user.id;

        if(postLikes.includes(currentUserId)) {
            this.props.removeLike(id);
        } else {
            this.props.addLike(id);
        }

    }

    onUnlikeClick(id) {
        this.props.removeLike(id)
    }

    findUserLike(likes) {
        const { auth } = this.props;
        if(likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

  render() {
    const { post, auth, showActions, profiles } = this.props;

    let postLocation;
    console.log(this.props);

    if(profiles && post) {
        postLocation = profiles.filter((profile, i) => profile.user._id === post.user)[0].location
    } else {
        postLocation = 'Loading Location..'
    }

    return (
        <div className="card post-block mb-60">
            <div className="row post-header">
                <div className="post-header-container">
                    <a href="profile.html" className="post-img">
                        <img 
                            className="rounded-circle" 
                            src={post.avatar}
                            style={{ width: '30px', marginLeft: '20px', marginRight: '5px' }}
                            alt="" 
                        />
                    </a>
                    <div className="post-info">
                        <div className="text-left post-name">{post.name}</div>
                        <div className="text-left post-location">{postLocation}</div>
                    </div>
                </div>
            </div>
            <div className="row post-pic">
                <div className="col-md">
                    <div className="post-picture picturethumbnail">
                        <img width="800" height="600" className="imgthumbnail" src={post.image} />
                    </div>

                    {showActions ? (
                        <span>
                            <button onClick={this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-white">
                                <i className={classnames('far fa-heart text-28', { 'fas fa-heart text-28 text-info': this.findUserLike(post.likes) })} />
                                {/* <span className="badge badge-dark">{post.likes.length}</span> */}
                            </button>
                            <Link to={`/post/${post._id}`} className="btn btn-white">
                                <i className='far fa-comment text-28'></i>
                            </Link>
                            {/* {post.user === auth.user.id ? (
                                <button type="button" onClick={this.onDeleteClick.bind(this, post._id)} className="btn btn-danger mr-1">
                                    <i className="fas fa-times" />
                                </button>
                            ) : null} */}
                        </span>
                    ) : null}

                    <p className="lead">
                        <div className="post-likes">{post.likes.length} likes</div>
                        <div className="post-comment"><span>{post.name}</span> {post.text}</div>
                    </p>
                </div>
            </div>
        </div>
    )
  }
}

PostItem.defaultProps = {
    showActions: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    deletePost: (id) => dispatch(deletePost(id)),
    addLike: (id) => dispatch(addLike(id)),
    removeLike: (id) => dispatch(removeLike(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
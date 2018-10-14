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
        this.props.addLike(id);
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
    const { post, auth, showActions } = this.props;
    console.log(this.props)

    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="">
                    <a href="profile.html">
                        <img 
                            className="rounded-circle" 
                            src={post.avatar}
                            style={{ width: '30px', marginLeft: '20px', marginRight: '5px' }}
                            alt="" 
                        />
                    </a>
                    <p className="text-center">{post.name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <div className="picturethumbnail">
                        <img width="1280" height="720" className="imgthumbnail" src={post.image} />
                    </div>
                    <p className="lead">
                        {post.text}
                    </p>
                    {showActions ? (
                        <span>
                            <button onClick={this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
                                <i className={classnames('fas fa-thumbs-up', { 'text-info': this.findUserLike(post.likes) })} />
                                <span className="badge badge-light">{post.likes.length}</span>
                            </button>
                            <button onClick={this.onUnlikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
                                <i className="text-secondary fas fa-thumbs-down"></i>
                            </button>
                            <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                                Comments
                            </Link>
                            {post.user === auth.user.id ? (
                                <button type="button" onClick={this.onDeleteClick.bind(this, post._id)} className="btn btn-danger mr-1">
                                    <i className="fas fa-times" />
                                </button>
                            ) : null}
                        </span>
                    ) : null}
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
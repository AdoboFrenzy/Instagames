import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/spinner';
import { mapStateToProps, mapDispatchToProps } from './PostsContainer';

class Posts extends React.Component {

    constructor() {
        super() 

        this.state = {
            showPostForm: false
        }

        this.addPost = this.addPost.bind(this);
    }
    
    componentDidMount() {
        // console.log(this.props)
        this.props.getPosts();
        this.props.getProfiles();
    }

    addPost() {
        console.log('add post')

        if(this.state.showPostForm) {

            this.setState({ showPostForm: false })
        } else {

            this.setState({ showPostForm: true })
        }
    }

    render() {
        // console.log(this.props)
        const { post, posts, loading } = this.props.post;
        const { profiles } = this.props;
        let postContent, postForm;

        if(this.state.showPostForm) {
            postForm = (<div className="dropzone-text-container-2" onClick={this.addPost}>
                {/* <p> Hide Post Form - <i className="fa fa-camera" aria-hidden="true"></i></p> */}
                <PostForm addPost={this.addPost} />
            </div>)
        } else {

            postForm = (<div className="dropzone-text-container" onClick={this.addPost}>
                <p> Add a Post Here - <i className="fa fa-camera" aria-hidden="true"></i></p>
            </div>)
        }
        

        if((posts === null || profiles === null) || loading) {
            postContent = <Spinner />;
        } else {
            postContent = <PostFeed posts={posts} profiles={profiles} />;
        }

        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {postForm}
                            {postContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
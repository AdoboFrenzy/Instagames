import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import SideFeed from './SideFeed';
import Spinner from '../common/spinner';
import { mapStateToProps, mapDispatchToProps } from './PostsContainer';

class Posts extends React.Component {

    constructor() {
        super() 

        this.state = {
            showPostForm: false
        }

        // this.child = React.createRef();
        this.addPost = this.addPost.bind(this);
        // this.handleAddPost = this.handleAddPost.bind(this);
    }
    
    componentDidMount() {
        // console.log(this.props)
        this.props.getPosts();
        this.props.getProfiles();
    }

    addPost() {

        if(this.state.showPostForm) {

            this.setState({ showPostForm: false })
        } else {

            this.setState({ showPostForm: true })
        }
    }

    render() {
        
        const { post, posts, loading } = this.props.post;
        const { auth, profiles } = this.props;
        const currentUser = auth.user;
        let postContent, postForm, sideContent;

        // console.log(profiles);

        if(this.state.showPostForm) {
            postForm = (<div className="dropzone-text-container-2">
                {/* <p> Hide Post Form - <i className="fa fa-camera" aria-hidden="true"></i></p> */}
                <PostForm addPost={this.addPost} />
            </div>)
        } else {

            postForm = (<div className="dropzone-text-container" onClick={this.addPost}>
                <p><i class="fas fa-plus"></i>  <i className="fa fa-camera" aria-hidden="true"></i></p>
            </div>)
        }

        if((posts === null || profiles === null) || loading) {
            postContent = <Spinner />;
        } else {
            postContent = <PostFeed posts={posts} profiles={profiles} />;
            sideContent = <SideFeed currentUser={currentUser} profiles={profiles} />;
        }



        return (
            <div className="feed">
                <div className="container">
                    <div className="feed-row row">
                        <div className="col-md-12 post-feed">
                            <div className="side-post-feed">
                                {sideContent}
                            </div>
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
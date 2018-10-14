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
            newComment: ''
        }

        
    }
    
    componentDidMount() {
        // console.log(this.props)
        this.props.getPosts();
        this.props.getProfiles();
    }

    render() {
        // console.log(this.props)
        const { post, posts, loading } = this.props.post;
        const { profiles } = this.props;
        let postContent;

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
                            <PostForm />
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
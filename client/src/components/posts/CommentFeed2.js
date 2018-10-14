import React from 'react';
import PropTypes from 'prop-types';

class CommentFeed2 extends React.Component {
    render() {

        const { comments, postId } = this.props;

        return (

            comments.map((comment, i) => {

                return (
                    <div className="post-comment" key={i}><span>{comment.name}</span> {comment.text}</div>
                )
            })
        )
        
    }
}

CommentFeed2.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
}

export default CommentFeed2
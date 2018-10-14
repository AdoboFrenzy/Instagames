import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { mapStateToProps, mapDispatchToProps } from './CommentFormContainer';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            new: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
            this.setState({ errors: newProps.errors })
        }
    }

    componentDidMount() {
        // this.props.getPost(this.props.postId);
    }

    componentDidUpdate(prevProps, nextProps) {
        // console.log(nextProps);
    }

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.props.auth;
        const { postId } = this.props;

        const newComment = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        }

        
        this.props.addComment(postId, newComment)
        setTimeout(window.location = `/post/${postId}`, 1000);
        
        this.setState({ text: '' })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="comment-input">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <TextAreaFieldGroup
                            placeholder="Add a comment..."
                            name="text"
                            value={this.state.text}
                            onChange={this.onChange}
                            error={errors.text}
                        />
                    </div>
                    <button type="submit" className="btn btn-light"><i className="far fa-check-square"></i></button>
                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {
    // addPost: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.shape.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
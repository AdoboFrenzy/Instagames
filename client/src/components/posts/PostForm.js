import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { mapStateToProps, mapDispatchToProps } from './PostFormContainer';

import uploadRequest from 'superagent';

const UPLOAD_PRESET = "tgim9lfr";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/djsyx60vg/image/upload";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            image: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.errors) {
            this.setState({ errors: newProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.props.auth;

        const newPost = {
            text: this.state.text,
            name: user.name,
            image: this.state.image,
            avatar: user.avatar
        }

        this.props.addPost(newPost);
        this.setState({ text: '', image: '' })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleImageUpload(image) {
        let upload = uploadRequest.post(UPLOAD_URL)
            .field('upload_preset', UPLOAD_PRESET)
            .field('file', image);
        upload.end((err, response) => {
            if (err) {
                // this.props.receivePegErrors(err);
                console.log(err)
            }
            if (response.body.secure_url !== '') {
                // console.log(this.state)
                // console.log(response.body.secure_url)
                // console.log(typeof(response.body.secure_url))

                this.setState({
                    image: (response.body.secure_url)
                });
            }
        });
    }

    picturethumbnail() {
        // console.log(this.state)
        if (this.state.image === '') {
            return (
                <div className="btn btn-light attach-btn">
                    <div> <i class="fas fa-paperclip"></i>  <i className="fa fa-camera" aria-hidden="true"></i></div>
                </div>
            );
        } else {
            return (
                <div className="picturethumbnail">
                    <img width="1280" height="720" className="imgthumbnail" src={this.state.image} />
                </div>
            );
        }
    }

  render() {
      const { errors } = this.state;

    return (
        <div>
        <div className="post-form mb-3">
            <div className="card card-info">
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.handleImageUpload.bind(this)} className="dropzone" minSize={1}>
                    {this.picturethumbnail()}

                </Dropzone>
                <div className="">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group-post">
                            <TextAreaFieldGroup 
                                placeholder="Add a post heading.."
                                name="text"
                                image={this.state.image || ''}
                                value={this.state.text}
                                onChange={this.onChange}
                                error={errors.text}
                            />
                        </div>
                            <button type="submit" className="btn btn-light post-submit-btn"><i className="far fa-check-square"></i></button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
    // errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
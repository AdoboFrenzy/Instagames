import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './RegisterContainer';
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }) // .name refers to the names of the input components below
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history)
    }

    render() {
        const { errors } = this.state; // object destructuring. equals to "const errors = this.state.errors;"

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11 m-auto">
                                <h1 className="display-4 text-center">Instagames</h1>
                                <form onSubmit={this.onSubmit}>

                                    <TextFieldGroup
                                        placeholder="Email Address"
                                        name="email"
                                        type="name"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        error={errors.name}
                                        registerInput='registerInput'
                                    />

                                    <TextFieldGroup 
                                        placeholder="Name"
                                        name="name"
                                        type="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                        registerInput='registerInput'
                                    />

                                    <TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                        registerInput='registerInput'
                                    />

                                    <TextFieldGroup
                                        placeholder="Confirm Password"
                                        name="password2"
                                        type="password2"
                                        value={this.state.password2}
                                        onChange={this.onChange}
                                        error={errors.password2}
                                        registerInput='registerInput'
                                    />
                                    
                                    <input type="submit" className="btn btn-info btn-block mt-4 btn-register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup signup2">
                    <div>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
        )
    }
};

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
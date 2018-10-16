import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './LoginContainer';
import TextFieldGroup from '../common/TextFieldGroup'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }

        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11 m-auto">
                                <h1 className="display-4 text-center">Instagames</h1>
                                {/* <p className="lead text-center">Sign in to your Instagames account</p> */}
                                <form onSubmit={this.onSubmit}>
                                    <TextFieldGroup 
                                        placeholder="Email Address"
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                        loginInput='loginInput'
                                    />

                                    <TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                        loginInput='loginInput'
                                    />

                                    <input type="submit" className="btn btn-info btn-block btn-login" value="Log In"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup">
                    <div>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
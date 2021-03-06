import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './containers/NavbarContainer';

class Navbar extends React.Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="">
                <Link className="nav-link-left" to="/feed">
                    <i className="fab fa-instagram"></i>  <div className="instagram-logo">Instagames</div>
                </Link> 
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    Dashboard
                </Link>
            </li> */}
            {/* <li className="nav-item">
                <a 
                    href="/"
                    onClick={this.onLogoutClick.bind(this)} 
                    className="nav-link">

                    <img 
                    className="rounded-circle"
                    src={user.avatar} 
                    alt={user.name} 
                    style={{ width:'25px', marginRight: '5px' }} 
                    title="Profile Image" />
                    {' '}
                    Logout
                </a>
            </li> */}
        </ul>
    )

    const authLinks2 = (
        <div>
            <Link className="nav-link" to="/profiles"><i className="far fa-compass"></i></Link>

            <Link className="nav-link" to="/profiles"><i className="far fa-heart"></i></Link>

            <Link className="nav-link" to="/"><i className="far fa-user"></i></Link>
        </div>
    )

    const guestLinks = (<div></div>)
    //     <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //             <Link className="nav-link" to="/register">Sign Up</Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to="/login">Login</Link>
    //         </li>
    //     </ul>
    // )

    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-4">
            <div className="nav-cont">
            
                <div className="cont">
                    {isAuthenticated ? authLinks : null}

                </div>

                <div className="cont">
                    {isAuthenticated ? authLinks2 : null}

                </div>
            </div>
        </nav>
      </div>
    )
  }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
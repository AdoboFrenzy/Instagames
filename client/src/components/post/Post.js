import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/spinner';
import { mapStateToProps, mapDispatchToProps } from './PostContainer';

class Post extends React.Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

  render() {
    return (
      <div>
        <h1>POST</h1>
      </div>
    )
  }
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
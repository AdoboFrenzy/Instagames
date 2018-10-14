import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends React.Component {


    render() {
        const { post, auth, col } = this.props;
        console.log(this.props)

        return (
            <div className="dashboard-img-feed">
                <img className={classnames(
                    {'dashboard-img img-0' : '0' == col},
                    {'dashboard-img img-1' : '1' == col},
                    {'dashboard-img img-2' : '2' == col}
                    )} alt="" src={post.image} /> <br/>
            </div>
        )
    }
}



export default connect()(PostItem);
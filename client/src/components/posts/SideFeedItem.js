import React from 'react'

class SideFeedItem extends React.Component {
  render() {

    const { profile } = this.props;

    return (

        <div className="side-profile-container">
            <a href="profile.html" className="post-img">
                <img
                    className="rounded-circle"
                    src={profile.user.avatar}
                    style={{ width: '50px', marginLeft: '0px', marginRight: '5px' }}
                    alt=""
                />
            </a>
            <div className="post-info">
                <div className="text-left side-name">{profile.user.name}</div>

            </div>
        </div>

    )
  }
}

export default SideFeedItem;
import React from 'react';
import SideFeedItem from './SideFeedItem';

class PostFeed extends React.Component {
    render() {

        const { currentUser, profiles } = this.props;
        const otherProfiles = profiles.filter((profile) => profile.user._id !== currentUser.id)

        let sideProfileContent = otherProfiles.map(profile => <SideFeedItem currentUser={currentUser} profile={profile} />)

        console.log(otherProfiles)
        return (
            <div>
                <div className="side-header-container">
                    <a href="/dashboard" className="post-img">
                        <img
                            className="rounded-circle"
                            src={currentUser.avatar}
                            style={{ width: '50px', marginLeft: '0px', marginRight: '5px' }}
                            alt=""
                        />
                    </a>
                    <div className="post-info">
                        <div className="text-left side-name">{currentUser.name}</div>
            
                    </div>
                </div>
                <div className="side-profiles-container">
                    <div className="side-profiles">Other Gamers:</div>
                    {sideProfileContent}
                </div>

            </div>
        )
    }
}

export default PostFeed;
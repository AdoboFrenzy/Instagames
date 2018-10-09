import React from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends React.Component {

    componentDidMount() {
        console.log(this.props.profile)
    }

    render() {
        const { profile } = this.props;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-body bg-info text-white mb-3">
                                <div className="row">
                                    <div className="col-4 col-md-3 m-auto">
                                        <img className="rounded-circle" src={profile.user.avatar} alt="" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="display-4 text-center">{profile.user.name}</h1>
                                    <p className="lead text-center">{profile.status} Gamer {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}</p>
                                    {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                                    <p>
                                        {isEmpty(profile.social) || isEmpty(profile.social.discord) ? null : (
                                            <a className="text-white p-2" href={profile.social.discord} target="_blank">
                                                <i className="fab fa-discord fa-2x"></i>
                                            </a>
                                        )}
                                        {isEmpty(profile.social) || isEmpty(profile.social.twitch) ? null : (
                                            <a className="text-white p-2" href={profile.social.twitch} target="_blank">
                                                <i className="fab fa-twitch fa-2x"></i>
                                            </a>
                                        )}
                                        {isEmpty(profile.social) || isEmpty(profile.social.twitter) ? null : (
                                            <a className="text-white p-2" href={profile.social.twitter} target="_blank">
                                                <i className="fab fa-twitter fa-2x"></i>
                                            </a>
                                        )}
                                        {isEmpty(profile.social) || isEmpty(profile.social.instagram) ? null : (
                                            <a className="text-white p-2" href={profile.social.instagram} target="_blank">
                                                <i className="fab fa-instagram fa-2x"></i>
                                            </a>
                                        )}
                                        {isEmpty(profile.social) || isEmpty(profile.social.youtube) ? null : (
                                            <a className="text-white p-2" href={profile.social.youtube} target="_blank">
                                                <i className="fab fa-youtube fa-2x"></i>
                                            </a>
                                        )}
                                     
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileHeader;
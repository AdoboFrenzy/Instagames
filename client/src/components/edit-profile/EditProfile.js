import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from "./EditProfileContainer";
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import isEmpty from '../../validation/is-empty';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            twitch: '',
            discord: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
        

        if(nextProps.profile.profile) {
            const profile = nextProps.profile.profile;

        
            // Bring sills array back to Comma Separated Value
            const skillsCSV = !isEmpty(profile.skills) ? profile.skills.join(',') : '';

            // If profile field doesn't exist, make expty string
            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';

            profile.social = !isEmpty(profile.social) ? profile.social : {};
            profile.twitch = !isEmpty(profile.social.twitch) ? profile.social.twitch : '';
            profile.discord = !isEmpty(profile.social.discord) ? profile.social.discord : '';
            profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
            profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
            profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
            profile.twitch = !isEmpty(profile.social.twitch) ? profile.social.twitch : '';
            profile.discord = !isEmpty(profile.social.discord) ? profile.social.discord : '';

            // Set component fields state      
            this.setState({
                handle: profile.handle,
                company: profile.company,
                website: profile.website,
                location: profile.location,
                status: profile.status,
                skills: skillsCSV,
                githubusername: profile.githubusername,
                bio: profile.bio,
                twitter: profile.twitter,
                facebook: profile.facebook,
                linkedin: profile.linkedin,
                youtube: profile.youtube,
                instagram: profile.instagram,
                twitch: profile.twitch,
                discord: profile.discord
            }, () => {
                console.log(this.state.twitch)
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('submit');

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram,
            twitch: this.state.twitch,
            discord: this.state.discord
        };

        this.props.createProfile(profileData, this.props.history);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Twitch Profile Name"
                        name="twitch"
                        icon="fab fa-twitch"
                        value={this.state.twitch}
                        onChange={this.onChange}
                        error={errors.twitch}
                    />

                    <InputGroup
                        placeholder="Discord Profile Name"
                        name="discord"
                        icon="fab fa-discord"
                        value={this.state.discord}
                        onChange={this.onChange}
                        error={errors.discord}
                    />

                    <InputGroup
                        placeholder="Twitter Profile Name"
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />


                    <InputGroup
                        placeholder="Instagram Profile Name"
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />

                    <InputGroup
                        placeholder="Youtube Channel"
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                </div>
            );
        };

        // Select options for status
        const options = [
            { label: '* Select Type', value: 0 },
            { label: 'Casual', value: 'Casual' },
            { label: 'Competitive', value: 'Competitive' },
            { label: 'Professional', value: 'Professional' },
            { label: 'Coach', value: 'Coach' },
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Your Profile</h1>

                            <small className="d-block pb-3">* = required fields</small>

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. Full name, company name, nick name, etc"
                                />
                                <SelectListGroup
                                    placeholder="* Status"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    options={options}
                                    error={errors.status}
                                    info="Give us an idea of what type of gamer you are"
                                />
                                <TextFieldGroup
                                    placeholder="Team or Company"
                                    name="company"
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    error={errors.company}
                                    info="A team or company that sponsors you or N/A"
                                />
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                    info="City and State"
                                />
                                <TextFieldGroup
                                    placeholder="* Game Types"
                                    name="skills"
                                    value={this.state.skills}
                                    onChange={this.onChange}
                                    error={errors.skills}
                                    info="Types of games you play (ex. RPG, Strategy, Boardgames, First Person Shooters)"
                                />
                                <TextFieldGroup
                                    placeholder="Twitch or Discord Username"
                                    name="githubusername"
                                    value={this.state.githubusername}
                                    onChange={this.onChange}
                                    error={errors.githubusername}
                                    info="Twitch or Discord Username - so people can contact you"
                                />
                                <TextAreaFieldGroup
                                    placeholder="Short Bio"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                    info="Tell us about yourself"
                                />
                                <div className="mb-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }))
                                        }}>
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
                                <input type="submit" value="Save" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EditProfile.propTypes = {

    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));
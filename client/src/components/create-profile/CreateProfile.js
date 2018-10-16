import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from "./CreateProfileContainer";
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '',
            company:'',
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

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();

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
        const { auth } = this.props;

        console.log(auth)

        let socialInputs;

        if(displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup 
                        placeholder="Twitch Profile Name"
                        name="twitch"
                        icon="fab fa-twitch"
                        onChange={this.onChange}
                        profilechanges='profilechanges'
                        error={errors.twitch}
                    />
      
                    <InputGroup 
                        placeholder="Discord Profile Name"
                        name="discord"
                        icon="fab fa-discord"
                        onChange={this.onChange}
                        profilechanges='profilechanges'
                        error={errors.discord}
                    />
      
                    <InputGroup 
                        placeholder="Twitter Profile Name"
                        name="twitter"
                        icon="fab fa-twitter"
                        onChange={this.onChange}
                        profilechanges='profilechanges'
                        error={errors.twitter}
                    />
      
      
                    <InputGroup 
                        placeholder="Instagram Profile Name"
                        name="instagram"
                        icon="fab fa-instagram"
                        onChange={this.onChange}
                        profilechanges='profilechanges'
                        error={errors.instagram}
                    />
      
                    <InputGroup 
                        placeholder="Youtube Channel"
                        name="youtube"
                        icon="fab fa-youtube"
                        onChange={this.onChange}
                        profilechanges='profilechanges'
                        error={errors.youtube}
                    />
                </div>
            ) ;
        };

        // Select options for status
        const options = [
            { label: '* Select Type', value: 0 },
            { label: 'Casual', value: 'Casual' },
            { label: 'Competitive', value: 'Competitive' },
            { label: 'Professional', value: 'Professional' },
            { label: 'Coach', value: 'Coach' },
            { label: 'Other Type', value: 'Other Type of' }
        ];

        return (
            <div className="create-profile-form">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <div>Edit Profile</div>
                        </div>
                        <div className="right-col">
                            {/* <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p> */}
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <div className="labelfieldgroup">
                                    <div className="label">Name</div>
                                    <TextFieldGroup 
                                        placeholder="Name"
                                        name="Name"
                                        value={auth.user.name}
                                        onChange={this.onChange}
                                        error={errors.handle}
                                        profilechanges='profilechanges'
                                        // info="Your registered name (can't be changed for now)"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">* Unique Handle</div>
                                    <TextFieldGroup 
                                        // placeholder="* Profile Handle"
                                        name="handle"
                                        value={this.state.handle}
                                        onChange={this.onChange}
                                        error={errors.handle}
                                        profilechanges='profilechanges'
                                        // info="A unique handle for your profile URL."
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">Gamer Type</div>
                                    <SelectListGroup
                                        // placeholder="* Status"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                        options={options}
                                        error={errors.status}
                                        profilechanges='profilechanges'
                                        // info="Give us an idea of what type of gamer you are"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">Team Sponsor</div>
                                    <TextFieldGroup
                                        // placeholder="Team or Company"
                                        name="company"
                                        value={this.state.company}
                                        onChange={this.onChange}
                                        error={errors.company}
                                        profilechanges='profilechanges'
                                        // info="A team or company that sponsors you or leave this blank"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">* Game Types</div>
                                    <TextFieldGroup
                                        placeholder="(ex: RPG, Strategy, Boardgames)"
                                        name="skills"
                                        value={this.state.skills}
                                        onChange={this.onChange}
                                        error={errors.skills}
                                        profilechanges='profilechanges'
                                        // info="Types of games you play (ex. RPG, Strategy, Boardgames, First Person Shooters)"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">Bio</div>
                                    <TextAreaFieldGroup
                                        // placeholder="Short Bio"
                                        name="bio"
                                        value={this.state.bio}
                                        onChange={this.onChange}
                                        error={errors.bio}
                                        profilechanges='profilechanges'
                                        // info="Tell us about yourself"
                                    />
                                </div>

                                <div className="profile-private-info">Private Information</div>

                                <div className="labelfieldgroup">
                                    <div className="label">Email</div>
                                    <TextFieldGroup
                                        placeholder="email"
                                        name="email"
                                        value={auth.user.email}
                                        onChange={this.onChange}
                                        error={errors.location}
                                        profilechanges='profilechanges'
                                        // info="Your registered e-mail (can't be change for now)"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">Location</div>
                                    <TextFieldGroup
                                        // placeholder="Location"
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.onChange}
                                        error={errors.location}
                                        profilechanges='profilechanges'
                                        // info="City and State"
                                    />
                                </div>
                                <div className="labelfieldgroup">
                                    <div className="label">Discord</div>
                                    <TextFieldGroup
                                        // placeholder="Twitch or Discord Username"
                                        name="githubusername"
                                        value={this.state.githubusername}
                                        onChange={this.onChange}
                                        error={errors.githubusername}
                                        profilechanges='profilechanges'
                                        // info="Twitch or Discord Username - so people can contact you"
                                    />
                                </div>

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
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateProfile));
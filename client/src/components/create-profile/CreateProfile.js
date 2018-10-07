import React from 'react';
import { connect } from 'react-redux';
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
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('submit');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if(displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup 
                        placeholder="Twitch Profile Name"
                        name="twitch"
                        icon="fab fa-twitch"
                        onChange={this.onChange}
                        error={errors.twitch}
                    />
      
                    <InputGroup 
                        placeholder="Discord Profile Name"
                        name="discord"
                        icon="fab fa-discord"
                        onChange={this.onChange}
                        error={errors.discord}
                    />
      
                    <InputGroup 
                        placeholder="Twitter Profile Name"
                        name="twitter"
                        icon="fab fa-twitter"
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
      
      
                    <InputGroup 
                        placeholder="Instagram Profile Name"
                        name="instagram"
                        icon="fab fa-instagram"
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
      
                    <InputGroup 
                        placeholder="Youtube Channel"
                        name="youtube"
                        icon="fab fa-youtube"
                        onChange={this.onChange}
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
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup 
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={this.setState.handle}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. Full name, company name, nick name, etc"
                                />
                                <SelectListGroup
                                    placeholder="* Status"
                                    name="status"
                                    value={this.setState.status}
                                    onChange={this.onChange}
                                    options={options}
                                    error={errors.status}
                                    info="Give us an idea of what type of gamer you are"
                                />
                                <TextFieldGroup
                                    placeholder="Team or Company"
                                    name="company"
                                    value={this.setState.company}
                                    onChange={this.onChange}
                                    error={errors.company}
                                    info="A team or company that sponsors you or N/A"
                                />
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={this.setState.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                    info="City and State"
                                />
                                <TextFieldGroup
                                    placeholder="* Game Types"
                                    name="skills"
                                    value={this.setState.skills}
                                    onChange={this.onChange}
                                    error={errors.skills}
                                    info="Types of games you play (ex. RPG, Strategy, Boardgames, First Person Shooters)"
                                />
                                <TextFieldGroup
                                    placeholder="Twitch or Discord Username"
                                    name="githubusername"
                                    value={this.setState.githubusername}
                                    onChange={this.onChange}
                                    error={errors.githubusername}
                                    info="Twitch or Discord Username - so people can contact you"
                                />
                                <TextAreaFieldGroup
                                    placeholder="Short Bio"
                                    name="bio"
                                    value={this.setState.bio}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                    info="Tell us about yourself"
                                />
                                <div className="mb-3">
                                    <button onClick={() => {
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
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
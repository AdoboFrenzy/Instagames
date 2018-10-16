import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

const TextAreaFieldGroup = ({
    name,
    image = "",
    placeholder,
    value,
    error,
    info,
    onChange,
    profilechanges
}) => {
    return (
        <div className="form-group">

            <textarea
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error,
                    profilechanges
                })}
                placeholder={error ? error : placeholder}
                name={name}
                image={image}
                value={value}
                onChange={onChange}
            />
            {/* {error && (
                <div className="invalid-feedback">{error}</div>
            )} */}
            {info && <small className="form-text text-muted">{info}</small>}

        </div>
    )
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default TextAreaFieldGroup
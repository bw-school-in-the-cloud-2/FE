import React from 'react';

const Volunteer = (props) => {
    
    const { name, country, email, availability } = props.volunteer

    return (
        <div>
            <br />
            <br />
            <p>start Volunteer - inside Volunteer component</p>
            <div className='volunteer'>
                <h5>Volunteer Name {name} </h5>
                <p>Location: {country} </p>
                <p>Email Contact: {email} </p>
                <p>Availability: {availability} </p>
            </div>
            <p> -- end volunteer -- </p>
        </div>
    )
}

export default Volunteer;

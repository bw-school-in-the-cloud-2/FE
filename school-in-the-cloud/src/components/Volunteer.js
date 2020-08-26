import React from 'react';

const Volunteer = (props) => {

    const { name, country, email, availability } = props.volunteer

    return (
        <div>
            <br />
            <div className='volunteer'>
                <h5> Volunteer Name {name} </h5>
                <p> Location: {country} </p>
                <p> Email Contact: {email} </p>
                <div> Availability: {
                    availability.map(timeSlot => {
                        return (
                            <div key={timeSlot.id} >
                                <p> {timeSlot.day} </p>
                                <p> {timeSlot.time_start} - {timeSlot.time_end} </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Volunteer;

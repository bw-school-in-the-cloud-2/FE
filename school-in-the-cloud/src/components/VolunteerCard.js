import React from 'react';

const VolunteerCard = (props) => {

    const { name, country, email, availability } = props.volunteer

    return (
        <div>
            <br />
            <div className='volunteer' style={{ border: "1px solid black" }} >
                <h5> {name} </h5>
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

export default VolunteerCard;

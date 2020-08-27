import React from 'react';
import { connect } from 'react-redux';

import VolunteerCard from './VolunteerCard';

const VolunteersList = (props) => {
    console.log(props);

    return (
        <div>

            <p>Registered Volunteers</p>

            {props.volunteers.map(volunteer => {
                return <VolunteerCard volunteer={volunteer} key={volunteer.id} />
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        volunteers: state.volunteerReducer.volunteers
    };
};

export default connect(mapStateToProps, {})(VolunteersList);


///////////// NEED TO CREATE FILTER --> BY COUNTRY.... BY AVAILABILITY //////////////////
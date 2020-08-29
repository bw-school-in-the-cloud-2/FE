import React from 'react';
import { connect } from 'react-redux';

// import VolunteerCard from './VolunteerCard';

const VolunteersList = (props) => {
    console.log(props)

    return (
        <div>

            <h3>Registered Volunteers</h3>

            {/* {props.volunteers.map(volunteer => {
                return <VolunteerCard volunteer={volunteer} key={volunteer.id} />
            })} */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        volunteers: state.volunteerReducer.volunteers
    };
};

export default connect(mapStateToProps, {})(VolunteersList);

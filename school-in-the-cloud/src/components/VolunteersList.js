import React from 'react';
import {connect} from 'react-redux';

import Volunteer from './Volunteer';

const VolunteersList = (props) => {
    console.log(props);

    return (
        <div>
            <p>Registered Volunteers</p>
            {props.volunteers.map(volunteer => {
            return <Volunteer volunteer={volunteer} key={volunteer.id} />
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        volunteers: state.volunteers
    };
};

export default connect(mapStateToProps, {})(VolunteersList);


//create route named /Student?
//or change component name to Student.... which will render VolunteerList
//will need a route from Login to this page
import React from 'react';
import { connect } from 'react-redux';

import VolunteerCard from './VolunteerCard';

const VolunteersList = (props) => {
    console.log(props);

    ///////////////// NEED TO SET UP FILTER - NOT SURE HOW TO DO THIS EXACTLY /////////////
//     const [] = useState ({

//     });
    

//     const filterChangeHandler = (e) => {
//         e.persist()
//         setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     // need submitHandler to apply filter
//     const saveFilterHandler = (e) => {
//         e.preventDefault();
// // GET request for volunteers array
// // if dropdown value is set to country, then if country has length, render to screen
// // else if dropdown value is set to availability, then render day/time selector?
//     }


    return (
        <div>

            <p>Registered Volunteers</p>
            <form /*onSubmit={saveFilterHandler} */>
                <label htmlFor='filter'>
                    <h4>filter</h4>
                    <select
                        name='filter'
                        // value=''
                        // onChange=''/*{filterChangeHandler}*/
                    >
                        <option value=''> -select one- </option>
                        <option value='country'>by location</option>
                        <option value='availability'>by availability</option>

                        {/* if availability is selected - need to filter by available day - may need radio buttons */}

                    </select>
                </label>
            </form>

            {props.volunteers.map(volunteer => {
                return <VolunteerCard volunteer={volunteer} key={volunteer.id} />
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


///////////// NEED TO CREATE FILTER --> BY COUNTRY.... BY AVAILABILITY TIME //////////////////
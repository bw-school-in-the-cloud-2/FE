import React from 'react';


const User = (props) => {
    console.log(props)
    const { name, age, height } = props.smurf

    return (
        <div>
            <div className='smurf' style={{ border: '1px solid black' }} >
                <h5>{name}</h5>
                <p>Age: {age}</p>
                <p>Height: {height} cm </p>
            </div>
            <br />
        </div>
    );
};

export default User;

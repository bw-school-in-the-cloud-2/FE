import React from 'react'
import Styled from 'styled-components'

const ConfirmationDiv = Styled.div`

button{
    margin: 10px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 12px;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #FFF;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    width: 150px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    display: inline-block;
    border-radius: 25px;
    background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%)
}
`


const WelcomeBack = () => {

return(
        <ConfirmationDiv>
            <h1>Welcome Back!</h1>
            <button>Dashboard</button>
        </ConfirmationDiv>
    )





}

export default WelcomeBack;
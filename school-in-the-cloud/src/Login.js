import React, {useState, useEffect} from "react";
import Styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import loginSchema from './LoginSchema'


const FormDiv = Styled.div`
width: 80%;
margin: 0 auto;
text-align: center;
padding: 2rem;
border: 5px solid black;
margin-top: 3rem;
background-color: white;

#Error{
    color:red;
    padding: 0;
}

label {
	width: 40%;
	display:flex;
	flex-direction:column;
	margin: 0 auto;
}

#submitBtn {
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

const initialFormValues = {
	email: '',
	password: '',
  }

const initialFormErrors = {
	name: '',
  }
  const initialDisabled = true

const Login = () => {

	const [user, setUser] = useState([])
	const [formValues, setFormValues] = useState(initialFormValues)
	const [formErrors, setFormErrors] = useState(initialFormErrors)
	const [disabled, setDisabled] = useState(initialDisabled)
	const history = useHistory()  

	const postNewUser = newUser => {
		axios.post('https://reqres.in/api/users', newUser)
		  .then(res => {
			setUser([res.data, ...user])
			setFormValues(initialFormValues)
			console.log(res.data)
		  })
		  .catch(err => {
			console.log(err)
			debugger
		  })
	  }

	  const inputChange = (name, value) => {
		yup
		  .reach(loginSchema, name)
		  .validate(value)
		  .then(valid => {
			setFormErrors({
			  ...formErrors,
			  [name]: "",
			})
		  })
		  .catch(err => {
			setFormErrors({
			  ...formErrors,
			  [name]: err.errors[0],
			})
		  })
		setFormValues({
		  ...formValues,
		  [name]: value 
		})
	  }

	  const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

	  const submit = () => {
		const newUser = {
		  email: formValues.email.trim(),
		  password: formValues.password.trim(),
		}
		postNewUser(newUser)
	  }

	  const onSubmit = evt => {
        evt.preventDefault()
		submit()
		history.push( '/welcomeback' )
      }


	  useEffect(() => {
		loginSchema.isValid(formValues).then(valid => {
		  setDisabled(!valid)
		})
	  }, [formValues])


    return (
  <FormDiv>
	
		<h2>Welcome Back!</h2>
		<div className='errors'>
                <div id='Error'>{formErrors.email || formErrors.password}</div>
				{/* <div id='Error'>{formErrors.name}</div>
				<div id='Error'>{formErrors.name}</div> */}
            </div>

			{/* <form onSubmit={onSubmit}> */}
			<form>

                <div>
                

				<label>
                    <input
                    type='email'
                    value={formValues.email}
                    placeholder='Enter Email...'
                    name='email'
                    onChange={onInputChange}
                    >
                    </input>
                </label>
				<br></br>
				<label>
                    <input
                    type='password'
					value={formValues.password}
                    placeholder='Enter Password...'
                    name='password'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

                
                </div>

                <br></br>
                
                <button disabled={disabled} onClick={onSubmit} id='submitBtn'>Login</button>
            </form>

	</FormDiv>
    );
  }
  
  export default Login;
  
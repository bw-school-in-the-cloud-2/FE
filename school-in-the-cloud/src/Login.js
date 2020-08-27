import React, {useState, useEffect} from "react";
import Styled from 'styled-components'
// import { Route, Link, Switch } from 'react-router-dom'
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
  
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import * as yup from 'yup';
import loginSchema from './LoginSchema';
import { axiosWithAuth } from "../utils/axiosWithAuth";


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

const LoginForm = () => {

	const [user, setUser] = useState([])
	const [formValues, setFormValues] = useState(initialFormValues)
	const [formErrors, setFormErrors] = useState(initialFormErrors)
	const [disabled, setDisabled] = useState(initialDisabled)
	const history = useHistory()

	const postNewUser = newUser => {
		axiosWithAuth()
			.post('/api/auth/users', newUser)
			.then(res => {
				console.log(res)
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
		history.push('/StudentMain') //if else if statement needed to route to different 'role' homepage
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

export default LoginForm;

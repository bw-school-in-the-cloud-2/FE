import React, {useState, useEffect} from "react";
import Styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import SignUpSchema from './SignUpSchema'


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
	width: 50%;
	display:flex;
	flex-direction:column;
	margin: 0 auto;
	padding: .5rem;
}

#submitBtn {
	color:red;
}

`

const initialFormValues = {
	name: '',
	email: '',
	password: '',
	role: '',
  }

const initialFormErrors = {
	name: '',
  }
  const initialDisabled = true

const SignUpForm = () => {

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
		  .reach(SignUpSchema, name)
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
		  name: formValues.name.trim(),
		  email: formValues.email.trim(),
		  password: formValues.password.trim(),
		  role: formValues.role.trim(),
		}
		postNewUser(newUser)
	  }

	  const onSubmit = evt => {
        evt.preventDefault()
        submit()
        history.push( '/Confirmation' )
      }


	  useEffect(() => {
		SignUpSchema.isValid(formValues).then(valid => {
		  setDisabled(!valid)
		})
	  }, [formValues])


    return (
  <FormDiv>
	
		<h2>Sign Up Now!</h2>
		<div className='errors'>
                <div id='Error'>{formErrors.name || formErrors.email || formErrors.password}</div>
				{/* <div id='Error'>{formErrors.name}</div>
				<div id='Error'>{formErrors.name}</div> */}
            </div>

			{/* <form onSubmit={onSubmit}> */}
			<form>

                <div>
                <label>
                    <input
                    type='text'
                    value={formValues.name}
                    placeholder='Enter Name...'
                    name='name'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

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
				
                <label id='role' htmlFor="role">Role:
                    <select
                    onChange={onInputChange}
                    value={formValues.role}
                    name='role'>
                        <option value=''>...Select</option>
                        <option value='student'>Student</option>
                        <option value='volunteer'>Volunteer</option>
                        <option value='admin'>Admin</option>
                    </select>
                </label>
                </div>

                <br></br>
            

               
                <button disabled={disabled} onClick={onSubmit} id='submitBtn'>Sign Up</button>
                
                
            </form>

	</FormDiv>
    );
  }
  
  export default SignUpForm;
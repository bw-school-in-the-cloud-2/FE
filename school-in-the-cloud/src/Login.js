import React, {useState, useEffect} from "react";
import Styled from 'styled-components'
// import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './FormSchema'


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
		  .reach(formSchema, name)
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
      }


	  useEffect(() => {
		formSchema.isValid(formValues).then(valid => {
		  setDisabled(!valid)
		})
	  }, [formValues])


    return (
  <FormDiv>
	
		<h2>Welcome to School in the Cloud</h2>
		{/* <div className='errors'>
                <div id='Error'>{errors.name}</div>
            </div> */}

			{/* <form onSubmit={onSubmit}> */}
			<form>

                <div>
                <label>Name:
                    <input
                    type='text'
                    // value={values.name}
                    placeholder='Type here...'
                    name='name'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

				<label>Email:
                    <input
                    type='email'
                    // value={name}
                    placeholder='Type here...'
                    name='email'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

				<label>Password:
                    <input
                    type='password'
                    // value={values.name}
                    placeholder='Type here...'
                    name='password'
                    onChange={onInputChange}
                    >
                    </input>
                </label>

                <label htmlFor="role">Role:
                    <select
                    onChange={onInputChange}
                    // value={values.size}
                    name='role'>
                        <option value=''>...Select</option>
                        <option value='student'>Student</option>
                        <option value='teacher'>Teacher</option>
                        <option value='admin'>Admin</option>
                    </select>
                </label>
                </div>

                <br></br>
                <div>

                </div>
                <button disabled={disabled} onClick={onSubmit} id='submitBtn'>Sign Up</button>
            </form>

	</FormDiv>
    );
  }
  
  export default Login;
  
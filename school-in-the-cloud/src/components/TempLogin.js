import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [login, setLogin] = useState({
    credentials: {
      email: '',
      password: ''
    }
  })

  const history = useHistory()

  const handleLoginChanges = e => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/login', login.credentials)
      .then(res => {
          console.log('NOW IN HERE')
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.token))
        history.push('/StudentMain')
      })
      .catch(err => console.log('Failed:', err))
  };


  return (
    <div>
      <h1>Temporary School Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='text'
          name='email'
          value={login.credentials.email}
          onChange={handleLoginChanges}
        />
        <input
          type='password'
          name='password'
          value={login.credentials.password}
          onChange={handleLoginChanges}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
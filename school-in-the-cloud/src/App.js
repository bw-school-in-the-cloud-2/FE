import React from 'react';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom'
import LoginForm from './Login'
import SignUpForm from './Signup'
import Confirmation from './Confirmation';

function App() {
  return (
    <div>
      
      <Route path='/'>
      <h1>Welcome to School in the Cloud</h1>

      <Link to='/Signup'>
          <button id='SignUpBtn'>Sign Up</button>
        </Link>

      <span>Or</span>

      <Link to='/Login'>
      <button id='LoginBtn'>Login</button>
        </Link>
      </Route>

      <Switch>

      <Route path='/signup'>
      <SignUpForm/>
      </Route>


      <Route path='/login'>
      <LoginForm/>
      </Route>

      <Route path='/confirmation' component={Confirmation}>
      <Confirmation/>
      </Route>

      </Switch>

    
    </div>

  );
}

export default App;

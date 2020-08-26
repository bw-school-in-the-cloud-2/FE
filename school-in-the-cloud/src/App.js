import React from 'react';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom'
import LoginForm from './Login'

function App() {
  return (
    <div>

      <Route path='/'>
      <h1>Welcome to School in the Cloud</h1>

    <Link to='/SignUp'>
          <button id='SignUpBtn'>Sign Up</button>
        </Link>

      <span>Or</span>
      <Link to='/Login'>
      <button id='LoginBtn'>Login</button>
        </Link>
      </Route>

    <Switch>

      <Route path='/SignUp'>
      <LoginForm>
      </LoginForm>
      </Route>


      <Route path='/Login'>
      </Route>

    </Switch>
    
    </div>

  );
}

export default App;

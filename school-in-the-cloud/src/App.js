import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { Link, Route, Switch} from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute';
import { getVolunteers } from './actions/actions';
import VolunteersList from './components/VolunteersList';

import Login from './components/TempLogin';


import LoginForm from './Login'
import SignUpForm from './Signup'
import Confirmation from './Confirmation';


class App extends Component {

  componentDidMount() {
    this.props.getVolunteers();
    console.log('INSIDE C D M')
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <p>IN APP: SCHOOL IN THE CLOUD</p>
          <br />
          <br />
      
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
      
      
      
          <Switch> /*-------*/
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/StudentMain' component={VolunteersList} />
      


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
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getVolunteers })(App);

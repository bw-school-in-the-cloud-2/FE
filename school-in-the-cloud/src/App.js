import React, { Component } from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import PrivateRoute from './components/PrivateRoute';
import { /*getVolunteers,*/ getSmurfs } from './actions/actions';
import VolunteersList from './components/VolunteersList';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';

// import Login from './components/TempLogin'; //////////////////////TEMP LOGIN - DELETE/////////////

import './App.css';

import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import Confirmation from './components/Confirmation';


class App extends Component {
  
    componentDidMount() {
      // this.props.getVolunteers();
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className='App'>
        <h1>Welcome to School in the Cloud</h1>
        <Route exact path='/' >
          <Link to='/Signup'>
            <button id='SignUpBtn'>Sign Up</button>
          </Link>

          <span> Or </span>

          <Link to='/Login'>
            <button id='LoginBtn'>Login</button>
          </Link>
        </Route>

        <br />
        <br />
        <br />
        <br />

        <div style={{ border: '1px solid black' }}>
          <SmurfList />
          <SmurfForm />
        </div>

        <br />
        <br />
        <br />
        <br />

        <Switch>
          {/* <Route exact path='/' component={Login} /> */}
          {/* //////////////////////////NOT NEEDED. DELETE. -- THIS ROUTE IS ABOVE///////////////////// */}

          <PrivateRoute path='AdminMain' />
          <PrivateRoute path='/StudentMain' component={VolunteersList} />
          <PrivateRoute path='VolunteerMain' />

          <Route path='/signup'>
            <SignUpForm />
          </Route>

          <Route path='/login'>
            <LoginForm />
          </Route>

          <Route path='/confirmation' component={Confirmation}>
            <Confirmation />
          </Route>

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { /*getVolunteers,*/ getSmurfs })(App);

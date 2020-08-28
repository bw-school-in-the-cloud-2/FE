import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import PrivateRoute from './components/PrivateRoute';
import { getVolunteers, retrieveTasks } from './actions/actions';
import VolunteersList from './components/VolunteersList';

import Login from './components/TempLogin'; //////////////////////TEMP LOGIN - DELETE/////////////

import './App.css';
<<<<<<< HEAD

import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import Confirmation from './components/Confirmation';
=======
import { Link, Route, Switch} from 'react-router-dom'
import LoginForm from './Login'
import SignUpForm from './Signup'
import Confirmation from './Confirmation';
import WelcomeBack from './WelcomeBack'
import Styled from 'styled-components'
// import MainAppImg from '../images/Main_App_Picture'

const AppForm = Styled.div `
border: 1px solid #d2d2d2;
box-shadow: 0px 1px 6px -2px #807f7f;
border-radius: 8px;
padding: 3rem;
font-family: monospace;
background-color: whitesmoke;
width: 40%;
margin: 0 auto;
text-align: center;
box-shadow: 0 0 20px #000;
position: absolute; 
    left: 500px; 
    top: 150px; 
    z-index: 0;

    h1{
      font-size:44px;
    }

    #SignUpBtn, #LoginBtn{
    margin: 10px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 16px;
    padding: 8px;
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

    span{
      font-size:20px;
    }

    input {
      border-radius: 5px;
      padding: 5px;
      font-size: .75rem;
    }

    select {
      border-radius: 5px;
      padding: 3px;
      font-size: .75rem;
    }

    #role {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    h2{
      margin-top: 0px;
      font-size: 28px;
    }

`
const AppBackground = Styled.div `
// background-image: url("https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
// background-image: url("https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjB9&auto=format&fit=crop&w=1350&q=80");
// background-image: url("https://images.unsplash.com/photo-1528157509193-8254fac59543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
background-image: url('https://i.ibb.co/w0tPr07/App-Picture-Edited-Bright.jpg');

background-repeat: no-repeat;
   height: 100vh;
   width: 100vw;
   background-size: 100%;
  
`


function App() {
  return (
    <AppBackground>
      <AppForm>
      
      <Route path='/'>
      <h1>Welcome to School in the Cloud</h1>
>>>>>>> jonathan-raczkowski


<<<<<<< HEAD
class App extends Component {
=======
      <span>  OR  </span>
>>>>>>> jonathan-raczkowski

  componentDidMount() {
    this.props.getVolunteers();
    this.props.retrieveTasks();
  }

  render() {
    return (
      <Router>
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

          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            {/* //////////////////////////NOT NEEDED. DELETE. -- THIS ROUTE IS ABOVE///////////////////// */}

<<<<<<< HEAD
            <PrivateRoute path='AdminMain' />
            <PrivateRoute path='/StudentMain' component={VolunteersList} />
            <PrivateRoute path='VolunteerMain' />
=======
      <Route path='/welcomeback' component={WelcomeBack}>
      <WelcomeBack/>
      </Route>
      
      <Route path='/confirmation' component={Confirmation}>
      <Confirmation/>
      </Route>
      
>>>>>>> jonathan-raczkowski

            <Route path='/signup'>
              <SignUpForm />
            </Route>

<<<<<<< HEAD
            <Route path='/login'>
              <LoginForm />
            </Route>

            <Route path='/confirmation' component={Confirmation}>
              <Confirmation />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}
=======
    
      </AppForm>
    </AppBackground>
>>>>>>> jonathan-raczkowski

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getVolunteers, retrieveTasks })(App);

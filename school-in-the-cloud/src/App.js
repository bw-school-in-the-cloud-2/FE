import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { getVolunteers } from './actions/actions';
import VolunteersList from './components/VolunteersList';

import Login from './components/TempLogin';

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
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/StudentMain' component={VolunteersList} />
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

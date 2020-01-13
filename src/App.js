import React, { Component } from 'react'

// Custom Components
import Nav from './components/layout/Nav'
import EmployeeList from './components/views/EmployeeList'
import Create from './components/views/Create'
import Statistics from './components/views/statelessViews/Statistics'
import Archives from './components/views/statelessViews/Archives'
import Messages from './components/views/statelessViews/Messages'
import Settings from './components/views/statelessViews/Settings' 
import EmployeeDetail from './components/views/EmployeeDetail'
import GetApp from './components/views/statelessViews/GetApp'

import { connect } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom';
import { fetchDatas } from './store/actions/employeesAction'

import './main.css'

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('employees_data')===true) {
      this.props.fetchDatas('FromLocalStorage')
      console.log('from localstorage')
    } else {
      this.props.fetchDatas();
      console.log('from server')
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="content-container">
            <Route exact path="/" component={EmployeeList} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/create" component={Create} />
            <Route path="/employees/:id" component={EmployeeDetail} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/archives" component={Archives} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/getApp" component={GetApp} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, { fetchDatas })(App)
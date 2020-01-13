import React, { Component } from 'react'

import Profile from './Profile'

import { Link } from 'react-router-dom'

class NavLinks extends Component {

  state = {
    SOM: false
  }

  showNavOnMobile = () => {
    this.setState({
      SOM: !this.state.SOM
    })
  }

  render() {
    return (
      <div className="nav-bar">
        
      <Profile showNavOnMobile={this.showNavOnMobile}/>
      <nav className={`${this.state.SOM ? "navigatoin-bar": "navigatoin-bar display-menu" }` } >
        <ul>
          <li>
            <Link className="link" to="/employees"><i className="material-icons nav-icon">list</i><span>SHOW EMPLOYEES</span></Link>
          </li>
          <li>
            <Link className="link" to="/create"><i className="material-icons nav-icon">note_add</i><span>ADD NEW EMPLOYEE</span></Link>
          </li>
          <li>
            <Link className="link" to="/statistics"><i className="material-icons nav-icon">star</i><span>STATISTICS</span></Link>
          </li>
          <li>
            <Link className="link" to="/archives"><i className="material-icons nav-icon">folder</i><span>ARCHIVE</span></Link>
          </li>
          <li>
            <Link className="link" to="/messages"><i className="material-icons nav-icon">message</i><span>MESSAGES</span></Link>
          </li>
          <li>
            <Link className="link" to="/settings"><i className="material-icons nav-icon">settings_applications</i><span>SETTING</span></Link>
          </li>
          <li>
            <Link className="link" to="/getApp"><i className="material-icons nav-icon">get_app</i><span>GET APP</span></Link>
          </li>
        </ul>
      </nav>
      </div>
    )
  }
}

export default NavLinks
import React from 'react'

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-img">
        <i className="material-icons profile-avatar-icon">account_box</i>
      </div>
      <div className="profile-detail">
        <p>Jhon Doe</p>
        <small>Admin</small>
      </div>
    
      <div className="menutoggle" onClick={props.showNavOnMobile}>
        <i className="material-icons">menu</i>
      </div>
    </div>
  )
}
 
export default Profile
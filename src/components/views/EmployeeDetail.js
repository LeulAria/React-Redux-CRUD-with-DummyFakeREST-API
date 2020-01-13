import React, { Component } from 'react'

import { removeEmployee, updateEmployeeData } from '../../store/actions/employeesAction'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EmployeeDetail extends Component {
  
  state = {
    edit: false,
    name: this.props.employee[0].employee_name,
    salary: this.props.employee[0].employee_salary,
    age: this.props.employee[0].employee_age,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  updateData = (e) => {
    e.preventDefault();
    this.setState({
      edit: false
    })
    this.props.updateEmployeeData(this.props.employee[0].id, this.state);
  }
  
  handleDelete = (id) => {
    this.props.removeEmployee(id);
    this.props.history.push('/')
  }

  handleEdit = () => {
    this.setState({
      edit: true
    })
  }
  closeEditModal = () => {
    this.setState({
      edit: false
    })
  }
  
  render() {
    const employee = this.props.employee[0];
    console.log('the detail of the employee: ', employee)
    return (
      <div className="container detail-cont">
        <div className="employee-detail-container">
          <div className="profile-img-detail">
            <Link to="/" >
              <div className="action-icon redirect-home">
                <i className="material-icons">keyboard_backspace</i>
              </div>
            </Link>
            <div className="profile-img">
              <i className="material-icons profile-avatar-icon">account_box</i>
            </div>
            }
          </div>
          <div className="detail">
            <div className="detail-item">
              <span className="key">Id</span>
              <span className="value">{employee.id}</span>
            </div>
            <div className="detail-item">
              <span className="key">Name:</span>
              <span className="value">{employee.employee_name}</span>
            </div>
            <div className="detail-item">
              <span className="key">Age:</span>
              <span className="value">{employee.employee_age}</span>
            </div>
            <div className="detail-item">
              <span className="key">Salary:</span>
              <span className="value">${employee.employee_salary}</span>
            </div>
          </div>

          <div className="employee-detail-other-actions">
            <div className="action-icon edit-icon" onClick={this.handleEdit}>
              <i className="material-icons">edit</i>
            </div>
            <div className="action-icon delete-icon" onClick={this.handleDelete.bind(this, employee.id)}>
              <i className="material-icons">delete</i>
            </div>
          </div>
        </div>
        {
            this.state.edit ? 
            (<div className="edit-modal">
              <form onSubmit={this.updateData} >
                <div>
                  <label htmlFor="name">Employee Name:</label>
                  <input type="text" id="name" placeholder="Jhon Doe" onChange={this.handleChange} value={this.state.name}  />
                </div>
                <div>
                  <label htmlFor="salary">Employee Age:</label>
                  <input type="number" name="age" id="age" placeholder="26" onChange={this.handleChange} value={this.state.age} />
                </div>
                <div>
                  <label htmlFor="salary">Employee Salary:</label>
                  <input type="number" name="salary" id="salary" placeholder="$50,000"  onChange={this.handleChange} value={this.state.salary} />
                </div>
                <input type="submit" value="Update" />
              </form> 
              <div onClick={this.closeEditModal} className="close-modal">
                <i className="material-icons">close</i>
              </div>
            </div>) : null
          }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(state)
  const employee = state.employees.employees.filter( employee => employee.id === id);
  return {
    employee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEmployee: (employee_id) => dispatch(removeEmployee(employee_id)),
    updateEmployeeData: (id, employeeNewData) => dispatch(updateEmployeeData(id, employeeNewData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail)
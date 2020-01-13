import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createEmployee } from '../../store/actions/employeesAction'

class Create extends Component {

  state = {
    name:"",
    salary: "",
    age: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEmployee(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Create">
        <div className="create-logo">
          <i className="material-icons">note_add</i>
        </div>
        <div className="create-form-container center-items">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Employee Name:</label>
              <input required type="text" id="name" placeholder="Jhon Doe" onChange={this.handleChange} value={this.state.name}  />
            </div>
            <div>
              <label htmlFor="salary">Employee Age:</label>
              <input required type="number" name="age" id="age" placeholder="26" onChange={this.handleChange} value={this.state.age} />
            </div>
            <div>
              <label htmlFor="salary">Employee Salary:</label>
              <input required type="number" name="salary" id="salary" placeholder="$50,000"  onChange={this.handleChange} value={this.state.salary} />
            </div>
            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEmployee: (employee) =>  dispatch(createEmployee(employee))
  }
}

export default connect(null, mapDispatchToProps)(Create)
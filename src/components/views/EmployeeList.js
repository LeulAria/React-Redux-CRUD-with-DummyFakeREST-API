import React, { Component } from 'react'

import Pagination from './Pagination'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { fetchDatas } from '../../store/actions/employeesAction'

class EmployeeList extends Component {

  state = {
    pageOfItems: [],
    searchKey: "",
    searching: false,
    propChange: false
  }
  
  onChangePage = (pageofItems) => {
    this.setState({ pageOfItems: pageofItems });
  }

  searchHander = (e) => {
    this.setState({
      searchKey: e.target.value 
    })
  }

  searchData = () => {
    this.setState({
      searching: !this.state.searching
    })
  }

  changedProp = () => {
    this.setState({
      propChange: false
    })
  }

  render() {
    const employeeList = this.state.pageOfItems.length ? this.state.pageOfItems.map( employee => {
      return (
        <Link to={`/employees/${employee.id}`} key={employee.id} className="item-link" >
          <div className="list-item">
            { employee.employee_name }
            <i className="material-icons list-item-see">remove_red_eye</i>
          </div>
        </Link>
      )
    }) : ( <h1 className="gray-text loading-text">Loading...</h1>);
    
    return (   
      <div className="Content center-items">
        <br />
        <div>
          {this.state.pageOfItems.length ? (<div className="search-input">
            <i className="material-icons searchinput-icon">search</i>
            <input type="text" className="search" placeholder="search..." onChange={this.searchHander} />
            {
              !this.state.searching ? 
              (<button onClick={this.searchData} className="search-button">Search</button>) : 
              (<button onClick={this.searchData} className="search-button dark">Cancel</button>)
            }
          </div>) : null }
          <div className="collection-list">
            { employeeList }
          </div>

          <Pagination items={this.props.employees} changed={this.state.propChange} onChangePage={this.onChangePage} 
          changedProp={this.changedProp}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
    newEmployee: state.employees.employee
  }
}

export default connect(mapStateToProps, { fetchDatas })(EmployeeList);
import { FETCH_DATAS, CREATE_EMPLOYEE, DELETE_DATA, UPDATE_DATA } from './actionTypes';
import axios from 'axios';

export const fetchDatas = (type) => dispatch => {
  if(type==='FromLocalStorage') {
    const data = localStorage.getItem('employees_data');
    dispatch({
      type: FETCH_DATAS,
      payload: data
    })
  }

  axios.get('https://dummy.restapiexample.com/api/v1/employees')
  .then(res => {
    dispatch({
      type: FETCH_DATAS,
      payload: res.data.data
    })
  });
};

export const createEmployee = employeeData => dispatch => {
  fetch('https://dummy.restapiexample.com/api/v1/create', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(employeeData)
  })
    .then(res => res.json())
    .then(post =>{
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: post
      })
    });
};

export const removeEmployee = employeeId => dispatch => {
  axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${employeeId}`)
  .then(data =>{
    dispatch({
      type: DELETE_DATA,
      payload: employeeId
    })
  })
};

export const updateEmployeeData = (id, employeeNewData) => dispatch => {
  axios.post(`https://dummy.restapiexample.com/api/v1/update/${id}`, employeeNewData)
  .then(res =>
    dispatch({
      type: UPDATE_DATA,
      payload: res.data
    })
  );
};
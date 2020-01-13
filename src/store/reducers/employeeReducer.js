import { FETCH_DATAS, CREATE_EMPLOYEE, UPDATE_DATA, DELETE_DATA } from '../actions/actionTypes';

const initialState = { 
  employees: [],
  employee: {}
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATAS:
      localStorage.setItem('employees_data', {...state, employees: action.payload})
      return  {
        ...state,
        employees: action.payload
      };
    case CREATE_EMPLOYEE:
      const emp = action.payload.data;
      const newEmployee = {
        id: Math.random(),
        employee_name: emp.name, 
        employee_salary: emp.salary, 
        employee_age: emp.age, }

      localStorage.setItem('employees_data', {...state, employee: action.payload})
      return {
        ...state,
        employees: [newEmployee, ...state.employees]
      }
    case UPDATE_DATA:
      localStorage.setItem('employees_data', [...state])
      return state;
    case DELETE_DATA:
      state = {...state, employees: state.employees.filter(emp => emp.id !== action.payload)}
      return state
    default:
      localStorage.setItem('employees_data', state)
      return state;
  }
}

export default  employeeReducer
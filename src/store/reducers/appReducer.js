import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const appReducer = combineReducers({
  employees: employeeReducer
});

export default appReducer
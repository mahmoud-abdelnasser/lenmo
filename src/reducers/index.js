
import { combineReducers } from 'redux';
import investProcessing from './investProcessing';
import investCurrent from './investCurrent';


export default function createRootReducer() {

  return (
    combineReducers({
        investProcessing,
        investCurrent
    }))
}
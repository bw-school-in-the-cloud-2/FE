import { combineReducers } from 'redux';

import {volunteerReducer} from './volunteerReducer';
import {taskReducer} from './taskReducer';

export const rootReducer = combineReducers({
    volunteerReducer,
    taskReducer
});
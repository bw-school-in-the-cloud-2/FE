import { combineReducers } from 'redux';

import { volunteerReducer } from './volunteerReducer';
import { smurfReducer } from './smurfReducer';

export const rootReducer = combineReducers({
    smurfReducer,
    volunteerReducer,
});
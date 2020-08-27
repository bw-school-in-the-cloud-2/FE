// import { CREATING_TASK, SUCCESS, FAIL } from '../actions/actions';

export const initialState = {
    tasks: [
        {
            id: '',
            taskName: '',
            completed: false
        }
    ],
};

export const taskReducer = (state = initialState, action) => {
    console.log('taskReducer', action);
    switch (action.type) {
        // case CREATING_TASK:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: ''
        //     };
        // case SUCCESS:
        //     return {
        //         ...state,
        //         tasks: action.payload,
        //         loading: false,
        //         error: ''
        //     };
        // case FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload
        //     };
        default:
            return state;
    }
};

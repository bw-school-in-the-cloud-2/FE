import { VOLUNTEERS_LOADING, SUCCESS, FAIL } from '../actions/actions';

export const initialState = {
    volunteers: [],
    error: '',
    loading: false
};

export const volunteerReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case VOLUNTEERS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case SUCCESS:
            return {
                ...state,
                volunteers: action.payload,
                loading: false,
                error: ''
            };
        case FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
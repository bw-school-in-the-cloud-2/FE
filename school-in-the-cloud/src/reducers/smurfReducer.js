import { SUCCESS, FAIL, SMURFS_LOADING, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF } from '../actions/actions';

export const initialState = {
    smurfs: [],
    error: '',
    loading: false
};

export const smurfReducer = (state = initialState, action) => {
    console.log('SMURF REDUCER', action);
    switch (action.type) {
        case SMURFS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ADD_SMURF:
        case UPDATE_SMURF:
        case DELETE_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                loading: false,
                error: ''
            };
        // case UPDATE_SMURF:
        //     return {
        //         ...state,
        //         smurfs: [...state.smurfs, action.payload],
        //         loading: false,
        //         error: ''
        //     }
        // case DELETE_SMURF:
        //     return {
        //         ...state,
        //         smurfs: [...state.smurfs, action.payload],
        //         loading: false,
        //         error: ''
        //     }
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
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

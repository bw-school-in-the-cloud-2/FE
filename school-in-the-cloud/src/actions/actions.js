import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const VOLUNTEERS_LOADING = 'VOLUNTEERS_LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export const getVolunteers = () => dispatch => {
    dispatch({ type: VOLUNTEERS_LOADING });
    axiosWithAuth()
        .get('/api/volunteers')
        .then(res =>
            dispatch({ type: SUCCESS, payload: res }),
        )
        .catch(err => dispatch({ type: FAIL, payload: err })
        );
};



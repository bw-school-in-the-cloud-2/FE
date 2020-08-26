import { axiosWithAuth } from '../utils/axiosWithAuth';

export const VOLUNTEERS_LOADING = 'VOLUNTEERS_LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export const getVolunteers = () => dispatch => {
    dispatch({ type: VOLUNTEERS_LOADING });
    axiosWithAuth()
        .get('/api/volunteers')
        .then(res => {
            console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FAIL, payload: err })
        );
};


//add task
//edit task
//delete task

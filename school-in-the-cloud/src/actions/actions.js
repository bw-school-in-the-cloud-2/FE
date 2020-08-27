import { axiosWithAuth } from '../utils/axiosWithAuth';

export const VOLUNTEERS_LOADING = 'VOLUNTEERS_LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const CREATING_TASK = 'CREATING_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RETRIEVING_TASKS = 'RETRIEVING_TASKS';


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

export const createTask = () => dispatch => {
    dispatch({ type: CREATING_TASK });
    axiosWithAuth()
        .post('')
        .then()
        .catch()

};


export const editTask = () => dispatch => {

};


export const deleteTask = () => dispatch => {

};


export const retrieveTasks = () => dispatch => {
    dispatch({ type: RETRIEVING_TASKS })
    axiosWithAuth()
        .get('/api/tasks/:volunteerid')
        .then(res => {
            console.log(res)
            dispatch({ type: SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FAIL, payload: err })
        })

};



//add task
//edit task
//delete task

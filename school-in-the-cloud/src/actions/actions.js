import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const VOLUNTEERS_LOADING = 'VOLUNTEERS_LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const SMURFS_LOADING = 'SMURFS_LOADING';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


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

export const getSmurfs = () => dispatch => {
    dispatch({ type: SMURFS_LOADING })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAIL, payload: err })
        })
};

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: SMURFS_LOADING });
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_SMURF, payload: res.data });
        })
        .catch((err) => dispatch({ type: FAIL, payload: err }));
}


export const updateSmurf = (smurfs, smurfToEdit, setSmurfs) => dispatch => {
    dispatch({ type: SMURFS_LOADING });
    axios
        .put(`http://localhost:3333/smurfs/${smurfToEdit.id}`, smurfToEdit)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURF, payload: res.data })
            setSmurfs([
                ...smurfs.filter(smurf => smurf.id !== smurfToEdit.id), res.data
            ])

        })
        .catch((err) => dispatch({ type: FAIL, payload: err }));
};


export const deleteSmurf = (smurf, smurfs, setSmurfs) => dispatch => {
    dispatch({ type: SMURFS_LOADING });
    axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
        console.log(res);
        dispatch({type: DELETE_SMURF, payload: res.data})
        setSmurfs([
            ...smurfs
        ])
    })
    .catch()
};


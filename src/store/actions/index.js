import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';

export const LOGGING_IN_START = 'LOGGING_IN_START';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
export const REGISTERING_START = 'REGISTERING_START';
export const REGISTERING_SUCCESS = 'REGISTERING_SUCCESS';
export const REGISTERING_FAILURE = 'REGISTERING_FAILURE';
export const FETCHING_TRIPS_START = 'FETCHING_TRIPS_START';
export const FETCHING_TRIPS_SUCCESS = 'FETCHING_TRIPS_SUCCESS';
export const FETCHING_TRIPS_FAILURE = 'FETCHING_TRIPS_FAILURE';

export const login = creds => async dispatch => {
    dispatch({ type: LOGGING_IN_START });
    try {
        const response = await axios.post('https://bw-trip-split.herokuapp.com/api/auth/login', creds);
        localStorage.setItem('token', response.data.token);
        dispatch({ type: LOGGING_IN_SUCCESS, payload: response.data });
    } catch (err) {
        dispatch({ type: LOGGING_IN_FAILURE, payload: err });
    }
}

export const register = creds => async dispatch => {
    dispatch({ type: REGISTERING_START });
    console.log(creds);
    try {
        const response = await axios.post('https://bw-trip-split.herokuapp.com/api/auth/register', creds);
        dispatch({ type: REGISTERING_SUCCESS, payload: response.data });
        console.log('Success');
    } catch (err) {
        dispatch({ type: REGISTERING_FAILURE, payload: err });
        console.log('action fail');
    }
}

export const fetchTrips = id => async dispatch => {
    console.log('fetching trips...')
    dispatch({ type: FETCHING_TRIPS_START });
    axiosWithAuth()
        .get(`/api/trips`)
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHING_TRIPS_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_TRIPS_FAILURE, payload: err });
        })
}
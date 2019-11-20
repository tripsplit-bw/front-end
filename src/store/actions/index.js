import axios from 'axios';

export const LOGGING_IN_START = 'LOGGING_IN_START';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
export const REGISTERING_START = 'REGISTERING_START';
export const REGISTERING_SUCCESS = 'REGISTERING_SUCCESS';
export const REGISTERING_FAILURE = 'REGISTERING_FAILURE';

export const login = creds => async dispatch => {
    dispatch({ type: LOGGING_IN_START });
    try {
        const response = await axios.post('https://bw-trip-split.herokuapp.com/api/auth/login', creds);
        dispatch({ type: LOGGING_IN_SUCCESS, payload: response.data });
    } catch (err) {
        dispatch({ type: LOGGING_IN_FAILURE, payload: err });
    }
}

export const register = creds => async dispatch => {
    dispatch({ type: REGISTERING_START });
    try {
        const response = await axios.post('https://bw-trip-split.herokuapp.com/api/auth/register', creds);
        dispatch({ type: REGISTERING_SUCCESS, payload: response.data });
    } catch (err) {
        dispatch({ type: REGISTERING_FAILURE, payload: err });
    }
}
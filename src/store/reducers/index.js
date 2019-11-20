import {
    LOGGING_IN_START,
    LOGGING_IN_SUCCESS,
    LOGGING_IN_FAILURE,
    REGISTERING_START,
    REGISTERING_SUCCESS,
    REGISTERING_FAILURE
} from '../actions';

const initialState = {
    users: [],
    profile: {},
    trips: [],
    expenses: [],
    user: {},
    registering: false,
    loggingIn: false,
    error: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGING_IN_START:
            return {
                ...state,
                loggingIn: true,
                error: {}
            };
        case LOGGING_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user: action.payload
            };
        case LOGGING_IN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case REGISTERING_START:
            return {
                ...state,
                registering: true,
                error: {}
            };
        case REGISTERING_SUCCESS:
            return {
                ...state,
                registering: false,
                user: action.payload
            };
        case REGISTERING_FAILURE:
            return {
                ...state,
                registering: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
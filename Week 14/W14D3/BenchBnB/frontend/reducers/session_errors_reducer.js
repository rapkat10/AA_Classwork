import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/sessionActions';

const _nullsession = {
    currentUser: null
};

export default (state = _nullsession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, {
                errors: action.errors
            });
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return state;
    }
};
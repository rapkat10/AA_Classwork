import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/sessionActions';


const _nullsession = {
    currentUser: null
};

export default (state = _nullsession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {
                currentUser: action.user
            });
        case LOGOUT_CURRENT_USER:
            return _nullsession;
        default:
            return state;
    }
};
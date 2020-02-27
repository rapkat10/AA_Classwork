import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const _nullsession = {
    currentUser: null
};

export default (state = {}, action) => {
    Object.freeze(state);
    debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                [action.currentUser.id]: action.currentUser
            });
        default:
            return state;
    }
};
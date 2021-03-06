import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                [action.currentUser.id]: action.currentUser
            });
        default:
            return state;
    }
};
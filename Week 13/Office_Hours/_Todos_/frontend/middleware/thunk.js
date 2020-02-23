const thunk = store => next => action => {
    if (typeof action === "function") {
        debugger;
        return action(store.dispatch, store.getState);
    } else {
        debugger;
        return next(action);
    }
};

export default thunk;

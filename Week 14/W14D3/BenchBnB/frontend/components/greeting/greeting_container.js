import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/sessionActions';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logout())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
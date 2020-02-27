import {connect} from 'react-redux';
import SessionForm from './session_form';
import { logIn } from '../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        formType: 'login',
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch) => ({
    logIn: (user) => dispatch(logIn(user))  
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
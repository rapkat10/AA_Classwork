import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signUp } from '../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        formType: 'signup',
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signUp } from '../../actions/sessionActions';

const mapStateToProps = ({ errors }) => {
    
    return {
        formType: 'signup',
        errors: errors.session
    }
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {

    return (
        <img className='error-image' src={img} alt="Not found" />
    )
}

export default ErrorMessage;
import { useHistory} from 'react-router-dom';


const RedirectToLogin = (props) => {
    localStorage.setItem('token', '');
    const history = useHistory();
    history.push('/login');
    window.location.reload();
}

export default RedirectToLogin


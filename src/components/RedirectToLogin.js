import React from 'react';
import { Redirect, useHistory} from 'react-router-dom';

import Login from '../Login';

const RedirectToLogin = (props) => {
    localStorage.setItem('token', '');
    const history = useHistory();
    history.push('/login');
    window.location.reload();
}

export default RedirectToLogin


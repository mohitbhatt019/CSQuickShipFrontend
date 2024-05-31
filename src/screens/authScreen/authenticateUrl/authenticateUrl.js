import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';
import { useOidc } from '@axa-fr/react-oidc';
import App from '../../../App';

const AuthenticateUrl = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { login, logout, renewTokens, isAuthenticated } = useOidc();

    useEffect(() => {
        //debugger
        if (id === '1') {
            login("/")
        } else {
            navigate('/login');
        }
    }, [id, navigate]);

    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    );
};

export default AuthenticateUrl;

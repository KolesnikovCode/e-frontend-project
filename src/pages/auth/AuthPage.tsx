import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTitlePage } from '../../core/hooks';
import AuthPageContent from './AuthPageContent';

const AuthPage = () => {
    // Change title hook
    useTitlePage('E A S Y - Авторизация');
    const user: any = useSelector((state: any) => state.user);

    const history = useHistory();

    React.useEffect(() => {
        if (user) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [user]);

    return <AuthPageContent />
}

export default AuthPage;

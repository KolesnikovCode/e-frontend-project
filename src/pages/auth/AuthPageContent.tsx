import firebase from 'firebase';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { setUser } from '../../redux/actions';
import './auth-page.scss';

const AuthPageContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // Local State
    const [isAuthRequestSending, setIsAuthRequestSending] = React.useState<boolean>(false);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    async function authWithGoogle() {
        try {
            setIsAuthRequestSending(true);
            const userResp = await firebase.auth().signInWithPopup(googleProvider);
            console.log('userResp', userResp.user);
            if (userResp.user) {
                dispatch(setUser(userResp.user));
                history.push('/');
            }
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div className="auth">
            <ContentContainer>
                <div className="auth-content">
                    <div className="auth-methods">
                        <h3>войти в систему с помощью:</h3>
                        <button onClick={ () => authWithGoogle() } type="button" disabled={ isAuthRequestSending }>Google</button>
                        <button type="button" disabled>Twitter</button>
                        <button type="button" disabled>VK</button>
                        <button type="button" disabled>ASOS)</button>
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

export default AuthPageContent;

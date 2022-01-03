import {Amplify, Auth} from 'aws-amplify';

import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
    const services = {
        async handleSignIn(formData) {
            let {username, password} = formData;

            console.log('custom sign in');
            return Auth.signIn({
                username,
                password,
            });
        },
    };
    return (
        <Authenticator services={services}>
            {({signOut, user}) => (
                <>
                    <h1>Hello {user && user.username}</h1>
                    <p>access token</p>
                    <textarea rows={4}>
                {user && user.signInUserSession.accessToken.jwtToken}
            </textarea>
                    <button onClick={() => {
                        navigator.clipboard.writeText(user.signInUserSession.accessToken.jwtToken).then(function () {
                            console.log('Async: Copying to clipboard was successful!');
                        }, function (err) {
                            console.error('Async: Could not copy text: ', err);
                        });
                    }}>Copy to clipboard
                    </button>
                    <p>idToken</p>
                    <textarea rows={4}>
                {user && user.signInUserSession.idToken.jwtToken}
            </textarea>
                    <button onClick={() => {
                        navigator.clipboard.writeText(user.signInUserSession.idToken.jwtToken).then(function () {
                            console.log('Async: Copying to clipboard was successful!');
                        }, function (err) {
                            console.error('Async: Could not copy text: ', err);
                        });
                    }}>Copy to clipboard
                    </button>

                    <button onClick={signOut}>Sign out</button>
                </>

            )}

        </Authenticator>
    );
}

// export default withAuthenticator(App);

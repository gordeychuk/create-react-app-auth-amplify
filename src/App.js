import {Amplify} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

console.log(awsExports);
Amplify.configure(awsExports);

function App({signIn, signOut, user}) {
    console.log(user);

    return (
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
    );
}

export default withAuthenticator(App);

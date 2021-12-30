import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
// import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signIn, signOut, user }) {
  return (
    <>
      <h1>Hello {user && user.username}</h1>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

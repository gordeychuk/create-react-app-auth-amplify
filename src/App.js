import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

console.log(awsExports);
Amplify.configure(awsExports);

function App({ signIn, signOut, user }) {
  console.log(user);

  return (
    <>
      <h1>Hello {user && user.username}</h1>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

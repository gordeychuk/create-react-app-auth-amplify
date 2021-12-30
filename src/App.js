import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, Auth from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <div>Token: {user.access_token}</div>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

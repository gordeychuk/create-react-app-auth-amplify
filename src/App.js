import { Amplify, Auth } from 'aws-amplify';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
// import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <div>info: {Auth.currentUserInfo()}</div>
      </div>
    );
  }

export default withAuthenticator(App);

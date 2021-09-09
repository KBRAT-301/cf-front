import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button';
import { Button } from 'semantic-ui-react';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button className="logButton" size='massive' color='pink' onClick={() => loginWithRedirect()}>
      LOG IN
    </Button>
  );
};

export default LoginButton;

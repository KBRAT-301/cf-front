import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button size="lg" style={{ backgroundColor: 'deeppink', border: 'none' }} onClick={() => loginWithRedirect()}>
      LOG IN
    </Button>
  );
};

export default LoginButton;

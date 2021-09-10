import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button circular className="logButton" color='pink' style={{ fontSize: '1.4rem' }} onClick={() => logout({ returnTo: window.location.origin })}>
      LOG OUT
    </Button>
  );
};

export default LogoutButton;

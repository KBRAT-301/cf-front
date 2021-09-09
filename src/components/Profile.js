import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Profile = (props) => {
  useEffect(() => {
    const soundData = props.getSound();
    console.log(soundData);
  });
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>LOADING</div>;
  }

  console.log(props.getSound);
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;

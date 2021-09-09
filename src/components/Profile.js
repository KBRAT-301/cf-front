import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Container } from 'semantic-ui-react';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>LOADING</div>;
  }
  return (
    isAuthenticated && (
      <div className="profile">
        <Grid centered stackable columns={7}>
          <Grid.Row mobile={7} tablet={5} computer={5} verticalAlign='top'>
            <Grid.Column className="person">
              <Container>
                <img style={{border: '1px solid gray', borderRadius: '4px', width: '100%' }} src={user.picture} alt={user.name} />
                <h2 style={{ color: 'black' }}>{user.name}</h2>
                <p>{user.email}</p></Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  );
};

export default Profile;

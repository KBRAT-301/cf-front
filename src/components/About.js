import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Grid, Container, Image, Button } from 'semantic-ui-react';
import kyle from '../img/kyle.png';
import brandon from '../img/brandon.jpg';
import ryan from '../img/ryan.jpg';
import alex from '../img/alex.jpg';
import tray from '../img/tray.jpg';


class About extends React.Component {

  render() {
    return (
      <div className="about">
        <Grid centered stackable columns={7}>
          <Grid.Row mobile={7} tablet={5} computer={5} verticalAlign='top'>
            <Grid.Column className="bio">
              <Container className="bioImg">
                <a href="https://www.linkedin.com/in/kyle-cohen-b49493213//" target="_blank" rel="noreferrer">
                  <Image src={kyle} alt='Kyle Cohen' />
                  <h3>Kyle Cohen</h3></a>
              </Container>
              <p>
                Kyle is a Michigan based software developer. Lover of the outdoors, most of his free time is spent fishing, hunting, and mountain biking. After serving in the United States Marine Corp he moved into the HVAC trade as a sheet metal worker/welder before finding his place in the Tech industry.
              </p>
              <Container textAlign='center'>
                <a href="https://www.linkedin.com/in/kyle-cohen-b49493213//" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='linkedin' icon='linkedin' /></a>
                <a href="https://github.com/kylecohen14" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='black' icon='github' /></a>
              </Container>
            </Grid.Column>

            <Grid.Column className="bio">
              <Container className="bioImg">
                <a href="https://www.linkedin.com/in/brandon-rimes/" target="_blank" rel="noreferrer">
                  <Image src={brandon} alt="Brandon Rimes" />
                  <h3>Brandon Rimes</h3></a>
              </Container>
              <p>
                Brandon Rimes is a dynamic autodidact and abstract intellectual. He gets excited about planet-positive projects as well as exquisite user experience web design. He enjoys being immersed in nature, gardening, playing various musical instruments, creating ornate objects, traveling, learning, teaching, connecting with and helping people, and sharing these things with his fellow humans.
              </p>
              <Container textAlign='center'>
                <a href="https://www.linkedin.com/in/brandon-rimes/" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='linkedin' icon='linkedin' /></a>
                <a href="https://github.com/BrandonRimes" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='black' icon='github' /></a>
                <a href="https://brandonrimes.net/" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='pink' icon='desktop' /></a>
              </Container>
            </Grid.Column>

            <Grid.Column className="bio">
              <Container className="bioImg">
                <a href="https://www.linkedin.com/in/ryanemmans/" target="_blank" rel="noreferrer">
                  <Image src={ryan} alt="Ryan Emmans" />
                  <h3>Ryan Emmans</h3></a>
              </Container>
              <p>
                Ryan is a Seattle based software developer previously from Chicago. Along with an extensive and diverse background in craft bartending and furniture making, he has a devoted passion for all platforms of visual design. In his free time, he finds pleasure in hiking, riding bikes, nerding out over architecture, and hanging out with his cat.
              </p>
              <Container textAlign='center'>
                <a href="https://www.linkedin.com/in/ryanemmans/" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='linkedin' icon='linkedin' /></a>
                <a href="https://github.com/ryanemmans" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='black' icon='github' /></a>
              </Container>
            </Grid.Column>

            <Grid.Column className="bio">
              <Container className="bioImg">
                <a href="https://www.linkedin.com/in/alex-grazda/" target="_blank" rel="noreferrer">
                  <Image src={alex} alt="Alex Grazda" />
                  <h3>Alex Grazda</h3></a>
              </Container>
              <p>
                Alex is a software engineering student at Code Fellows. He has worked 18 years in retail customer service and 5 years as a Project Manager. Alex has always been intrigued by software development. He is changing careers into an industry that has never-ending potential. He is passionate about traveling. He would love to work for a company that allows him to work remotely and and live out his passion.
              </p>
              <Container textAlign='center'>
                <a href="https://www.linkedin.com/in/alex-grazda/" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='linkedin' icon='linkedin' /></a>
                <a href="https://github.com/agrazda" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='black' icon='github' /></a>
              </Container>
            </Grid.Column>

            <Grid.Column className="bio">
              <Container className="bioImg">
                <a href="https://www.linkedin.com/in/chattray-chea/" target="_blank" rel="noreferrer">
                  <Image src={tray} alt="Tray Chea" />
                  <h3>Tray Chea</h3></a>
              </Container>
              <p>
                Tray is a Seattle based software developer. He is a former Air Force service member, serving for 10 years. Within the service he honed his skills in Aerospace Maintenance and Operations/Logistics management. He relishes AI, Ancient Languages, and Animal/Plant Conservation.
              </p>
              <Container textAlign='center'>
                <a href="https://www.linkedin.com/in/chattray-chea/" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='linkedin' icon='linkedin' /></a>
                <a href="https://github.com/Zavvy-Glitch" target="_blank" rel="noreferrer">
                  <Button size='medium' circular color='black' icon='github' /></a>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withAuth0(About);

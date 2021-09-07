import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2>Enter Subtitle Here</h2>
        <img src="https://via.placeholder.com/600x400" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo modi nostrum dolorem expedita, at nisi laborum minus perspiciatis voluptatibus est cum impedit amet. Facere fuga eaque sint, consequuntur porro fugit quod dolore? Fugit doloremque ipsa culpa, inventore sint, odio error debitis accusantium veniam commodi, unde aperiam id deleniti repudiandae.
        </p>
        <img src="https://via.placeholder.com/600x400" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo modi nostrum dolorem expedita, at nisi laborum minus perspiciatis voluptatibus est cum impedit amet. Facere fuga eaque sint, consequuntur porro fugit quod dolore? Fugit doloremque ipsa culpa, inventore sint, odio error debitis accusantium veniam commodi, unde aperiam id deleniti repudiandae.
        </p>
        <img src="https://via.placeholder.com/600x400" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo modi nostrum dolorem expedita, at nisi laborum minus perspiciatis voluptatibus est cum impedit amet. Facere fuga eaque sint, consequuntur porro fugit quod dolore? Fugit doloremque ipsa culpa, inventore sint, odio error debitis accusantium veniam commodi, unde aperiam id deleniti repudiandae.
        </p>
      </div>
    );
  }
}

export default withAuth0(Home);

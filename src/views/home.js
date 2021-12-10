import React from 'react';
import '../App.css'
import { Button } from 'react-bootstrap';

class Home extends React.Component {

  render() {
    return (
    <div className="background">
      <div className="center">
      <p>
      <h1>Home A Pet</h1>
      <div>
        <h3>Find the right pet for you and give them the family and home they deserve. </h3>
      </div>

      <Button href="/filter" variant="secondary">Find the perfect pet for you!</Button>{' '}

      </p>
      </div>
    </div>
  );
}

}
export default Home;

// home.js
import React from 'react';
import '../App.css';

class About extends React.Component {

  render() {
    return (
    <div class="jumbotron text-center">
      <center><h1>About Us</h1></center>
      <br></br>
      <div>
        <h3>Our Team</h3>
        <p>We are a group of 5 Master's students studying Computer Science at UC San Diego.</p>
        <br></br>
        <h3>Our Product</h3>
        <p>We provide a product (Home-a-Pet) to you which will help you find 
          the right pet. We do this by scraping information from pet/adoption websites 
          and showing you specific pets based on your criteria. </p>
      </div>
    </div>
  );
}
}
export default About;

// about.js
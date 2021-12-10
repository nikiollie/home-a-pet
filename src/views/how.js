import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import '../utils/styles.css'
import filterPets1 from '../assets/img/filterPets1.png';
import filterPets2 from '../assets/img/filterPets2.png';
import filterPets3 from '../assets/img/filterPets3.png';
import filterPets4 from '../assets/img/filterPets4.png';
import filterPets5 from '../assets/img/filterPets5.png';
import filterPets6 from '../assets/img/filterPets6.png';
import filterPets7 from '../assets/img/filterPets7.png';


class How extends React.Component {


  constructor(props){
    super(props);
  }

  render() {
    return (
     <div class="jumbotron text-center">
        <h1>How does this work?</h1>
        <br></br>
        <div class="row">
          <div class="col-sm-4">
            <h3>Step 1</h3>
            <p>Use our website’s search to find pets for adoption</p>
            <p>Head to the filter page</p>
            <img src={filterPets1} className="photo" alt="Profile pic"></img>
            <p>Add the filters you want to search</p>
            <img src={filterPets2} className="photo" alt="Profile pic"></img>
            <p>Browse the pets</p>
            <img src={filterPets6} className="photo" alt="Profile pic"></img>
          </div>
          <div class="col-sm-4">
            <h3>Step 2</h3>
            <p>Favourite pets to come back to searches (optional)</p>
            A pet which has been favourited by multiple people is more likely to get adopted faster, so act quicker!
            <br></br>
            <br></br>
            <img src={filterPets7} className="photo" alt="Profile pic"></img>
          </div>
          <div class="col-sm-4">
            <h3>Step 3</h3>        
            <p>Decided on a pet? <br></br> Head to the pet's parent site and fill up the adoption form :)</p>
            <img src={filterPets5} className="photo" alt="Profile pic"></img>
          </div>
        </div>
      </div>
  );
}
}
export default How;

import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Client } from "@petfinder/petfinder-js";
import Cookies from 'js-cookie';

var fs = require('browserify-fs');

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'Dog',
      gender: 'Choose...',
      distance: '10',
      zipcode: '',
      age: 'Choose...',
      size: 'Choose...',
      favoritesData: (this.props.location.state && this.props.location.state.favoritesData) ? this.props.location.state.favoritesData : [],
      favoritesUrls: (this.props.location.state && this.props.location.state.favoritesUrls) ? this.props.location.state.favoritesUrls : [],
      emailCriteria: Cookies.get('emailCriteria')
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewResults = this.viewResults.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }
  
  
  handleChange(e) {
    //when form is changed, set states and check email criteria checkmark
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    }, function () {
      //check email criteria checkmark
      const type = this.state.type;
      const distance = parseInt(this.state.distance);
      const zipcode = this.state.zipcode;
      const gender = (this.state.gender == "Choose...") ? "No gender preference" : this.state.gender;
      const age = (this.state.age == "Choose...") ? "No age preference" : this.state.age;
      const size = (this.state.size == "Choose...") ? "No size preference" : this.state.size;
      const emailCriteria = this.state.emailCriteria;

      var currCriteria = JSON.stringify([type,distance,zipcode,gender,age,size].toString());

      if (JSON.stringify(emailCriteria) === currCriteria) {
        document.getElementById("checkmark").checked = true;
      } else {
        document.getElementById("checkmark").checked = false;
      }
    });
  }
  
  handleSubmit = (e) => {
    document.getElementById("submitBtn").innerHTML = "Loading.."

    const type = this.state.type;
    const distance = parseInt(this.state.distance);
    const zipcode = this.state.zipcode;
    const gender = this.state.gender;
    const age = this.state.age;
    const size = this.state.size;

    const client = new Client({ 
      apiKey: "xcw7hyqnIdFvmBl64glmNV0RAuElo539kehszeevPP8FyaFoB8", 
      secret: "W05eTY6J1aD0DwT8NmU8PgrzXhevYS0IlZfuS8Cg" });

    let apiResult = 1;
    var animalObj = [];

    async function showAnimals(animalType, distanceMiles, zipNumber, animalGender, animalAge, animalSize) {
      let page = 1;
      let idx = 0;
    
      //check optional params from form (gender, age, & size)
      let petGender, petAge, petSize = '';

      if (animalGender !== "Choose...") {
        petGender = animalGender;
      }

      if (animalAge !== "Choose...") {
        petAge = animalAge;
      }

      if (animalSize !== "Choose...") {
        petSize = animalSize;
      }

      let query = {
        type: animalType,
        location: zipNumber,
        distance: distanceMiles,
        gender: petGender,
        age: petAge,
        size: petSize,
        page,
        limit: 50,
      };

      do {

        apiResult = await client.animal.search(query);

        // const response = await axios.get(`http://172.20.7.100:3333/pets/pets/`, {
        //   mode:'cors',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // });
        // const apiResult = await response;

        // console.log(apiResult.data)
        idx = (page - 1) * 100;

        apiResult.data.animals.forEach(function(animal) {
        // apiResult?.data?.map(animal => {

          //for debugging
          console.log(` -- ${++idx}: ${animal.name} 
          type: ${animal.type} 
          status: ${animal.status}
          description: ${animal.description}
          photo: ${animal.photos}
          breed: ${animal.breeds} 
          size: ${animal.size}
          age: ${animal.age} 
          gender: ${animal.gender}
          distance: ${animal.distance}`);
          
          const newAnimal = {
            name: animal.name, 
            type: animal.type,
            photo: animal.photos,
            id: animal.id, 
            url: animal.url,
            status: animal.status,
            size: animal.size,
            breed: animal.breeds,
            age: animal.age,
            gender: animal.gender,
            colors: animal.colors,
            distance: animal.distance,
            attributes: animal.attributes,
            environment: animal.environment
          };

          // if (animal.type == animalType 
          //     && animal.location == zipNumber
          //     && animal.distance == distanceMiles
          //   ) {
          //     animalObj.push(newAnimal);
          //   }
          animalObj.push(newAnimal);
        });

        page++;
      } while(idx < 100 ); //&& apiResult.data.pagination && apiResult.data.pagination.total_pages >= page

      // sort JSON data by distance
      // https://stackoverflow.com/questions/881510/sorting-json-by-values
      function sortJSON(arr, key, way) {
        return arr.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            if (way === '123') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
    }
    var animalObj2 = sortJSON(animalObj, 'distance', '123');
      var json = JSON.stringify(animalObj2, null, 2);
      fs.writeFile("./data.json", json, (err) => {
        if (err) throw err;
        console.log('Data written to file');

        //to read the data from the json file:
        fs.readFile("./data.json", "utf-8", (err, data) => {
          if (err) throw err;
          console.log(data);
        });

        document.getElementById("submitBtn").innerHTML = "Complete";
        //redirect to results page
        window.location.href="/results";

      });
      console.log('complete');


    }

    (async function() {
      await showAnimals(type, distance, zipcode, gender, age, size);
    })();

    e.preventDefault();

  }

  viewResults() {
    //back to results page
    this.props.history.push({
      pathname: '/results',
      state: {
          favoritesData: this.state.favoritesData,
          favoritesUrls: this.state.favoritesUrls} 
    });
  }


  handleCheckClick() {
    if (document.getElementById("checkmark").checked == false) {
      Cookies.remove('emailCriteria');
    } else {
      const type = this.state.type;
      const distance = parseInt(this.state.distance);
      const zipcode = this.state.zipcode;
      const gender = (this.state.gender == "Choose...") ? "No gender preference" : this.state.gender;
      const age = (this.state.age == "Choose...") ? "No age preference" : this.state.age;
      const size = (this.state.size == "Choose...") ? "No size preference" : this.state.size;
      Cookies.set('emailCriteria', [type,distance,zipcode,gender,age,size]);
    }  
    
    this.setState({emailCriteria: Cookies.get('emailCriteria')});
    
    console.log(Cookies.get('emailCriteria'));


  }

  render() {
    return (
      <div className="marginCenter">
        <center><h1>Filter Pets</h1></center>
        <center><Button type="submit" onClick={this.viewResults} variant="secondary">See Previous Search Results</Button>{' '}</center>
        <br></br>
        <br></br>
        <div>
            <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formHorizontalEmail">
                <Form.Label className="required">
                  Type
                </Form.Label>
                <Form.Select
                required
                name="type" 
                defaultValue="Dog"
                onChange={this.handleChange}
                value={this.state.type} 
                >
                  <option>Dog</option>
                  <option>Cat</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formHorizontalPassword">
                <Form.Label className="required">
                  Distance
                </Form.Label>
                <Form.Select 
                required
                name="distance"
                defaultValue="50 miles"
                onChange={this.handleChange}
                value={this.state.distance} 
                >
                  <option>10 miles</option>
                  <option>25 miles</option>
                  <option>50 miles</option>
                  <option>100 miles</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formHorizontalEmail">
                <Form.Label className="required">
                  Zipcode
                </Form.Label>
                  <Form.Control 
                  required
                  name="zipcode"
                  onChange={this.handleChange}
                  value={this.state.zipcode} 
                  type="number" 
                  placeholder="Zipcode" />
              </Form.Group>

              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formHorizontalEmail">
                <Form.Label>
                  Gender
                </Form.Label>
                <Form.Select
                required
                name="gender" 
                defaultValue="Choose..."
                onChange={this.handleChange}
                value={this.state.gender} 
                >
                  <option>Choose...</option>
                  <option>Female</option>
                  <option>Male</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formHorizontalEmail">
                <Form.Label>
                  Age
                </Form.Label>
                <Form.Select
                name="age" 
                defaultValue="Choose..."
                onChange={this.handleChange}
                value={this.state.age} 
                >
                  <option>Choose...</option>
                  <option>Baby</option>
                  <option>Young</option>
                  <option>Adult</option>
                  <option>Senior</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formHorizontalEmail">
                <Form.Label>
                  Size
                </Form.Label>
                <Form.Select
                name="size" 
                defaultValue="Choose..."
                onChange={this.handleChange}
                value={this.state.size} 
                >
                  <option>Choose...</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XLarge</option>
                </Form.Select>
              </Form.Group>

              </Row>
              <br></br>
              <Form.Check id="checkmark" onChange={this.handleCheckClick} label="Email me about new pets with this criteria (weekly)" />
              <br></br>
              <Button id="submitBtn" type="submit">Submit</Button>

            </Form>
        </div>
      </div>
    );
  }
} 
export default Filter;

// filter.js
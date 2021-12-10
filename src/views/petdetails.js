import React from 'react';
import { Button } from 'react-bootstrap';


class PetDetails extends React.Component {

    constructor(props){
        super(props);
        //checking if there are props from other pages (results page)
        this.state = {
            details: (this.props.location.state && this.props.location.state.details) ? this.props.location.state.details : [],
            from: (this.props.location.state && this.props.location.state.from) ? this.props.location.state.from : [],
            favoritesData: (this.props.location.state && this.props.location.state.favoritesData) ? this.props.location.state.favoritesData : [],
            favoritesUrls: (this.props.location.state && this.props.location.state.favoritesUrls) ? this.props.location.state.favoritesUrls : []
        };

        this.renderPetDetails = this.renderPetDetails.bind(this);
        this.viewResults = this.viewResults.bind(this);
        this.viewFavorites = this.viewFavorites.bind(this);
      }

      renderPetDetails() {
        const { type, size, name, gender, age, url, distance, breed, photo, favorite, numUsers, house_trained, spayed_neutered, shots_current, special_needs, good_with_children, good_with_dogs, good_with_cats } = this.state.details;
        
        //for characteristic traits
        let characteristics = []
        if (house_trained == true) {
            characteristics.push("house trained")
        }

        if (spayed_neutered == true) {
            if (gender == "Female") {
                characteristics.push("spayed")
            } else {
                characteristics.push("neutered")
            }
        }

        if (shots_current == true) {
            characteristics.push("vaccinations up to date")
        }

        if (special_needs == true) {
            characteristics.push("special needs")
        }
        
        //good in a home with
        let good_home = []
        if (good_with_children == true) {
            good_home.push("children")
        }
        
        if (good_with_dogs == true) {
            if (type == "Dog") {
                good_home.push("other dogs")
            } else {
                good_home.push("dogs")
            }
        }
        
        if (good_with_cats == true) {
            if (type == "Dog") {
                good_home.push("dogs")
            } else {
                good_home.push("other cats")
            }        
        }
        
        let char_list = (characteristics.length > 1) ? ("Characteristics: " + characteristics) : ""
        let home_list = (good_home.length > 1) ? ("Good in a home with: " + good_home) : ""

        let result = [];

        result.push(
            <div class="aligned">
                <div>
                    <h3>{name}</h3>
                    <p>{numUsers} others like this pet</p>
                    <img src={photo} class="img-rounded"></img> 
                </div>
                <span>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Breed: {breed}</p>
                <p>Size: {size}</p>
                <p>Distance: {distance} miles away</p>
                <p>{char_list}</p>
                <p>{home_list}</p>
                <a href={url} target="_blank" class="btn btn-primary">Adopt Me!</a>
                </span>
            </div>
            )

        return result;
        
    }

    viewResults() {
        //passing favorite data back to results page
        this.props.history.push({
            pathname: '/results',
            state: {
                favoritesData: this.state.favoritesData,
                favoritesUrls: this.state.favoritesUrls} 
        });
    }

    viewFavorites() {
        //pass favorites data to favorites page
        this.props.history.push( {pathname: "/favorites",
        state: {
            favoritesData: this.state.favoritesData,
            favoritesUrls: this.state.favoritesUrls} 
        });
      };

    render() {
        return (
        <div>
            <center><h1>Pet Details</h1></center>
            <Button id="results" type="submit" style={{ display: ((this.state.from == "results") ? 'block' : 'none') }} onClick={this.viewResults} variant="secondary">Back to Results</Button>{' '}
            <Button id="favs" type="submit" style={{ display: (this.state.from == "favs" ? 'block' : 'none') }} onClick={this.viewFavorites} variant="secondary">Back to Favorites</Button>{' '}

            <div class="container">
                <div class="row">
                    
                {this.renderPetDetails()}

                </div>
            </div>
        </div>
    );
    }
}
export default PetDetails;


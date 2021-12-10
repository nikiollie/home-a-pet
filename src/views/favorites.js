import React from 'react';
import { Button } from 'react-bootstrap';



class Favorites extends React.Component {

    constructor(props){
        super(props);
        //checking if there are props from other pages (results page)
        this.state = {
            favoritesData: (this.props.location.state && this.props.location.state.favoritesData) ? this.props.location.state.favoritesData : [],
            favoritesUrls: (this.props.location.state && this.props.location.state.favoritesUrls) ? this.props.location.state.favoritesUrls : []
        };

        this.renderTableRows = this.renderTableRows.bind(this);
        this.viewResults = this.viewResults.bind(this);
        this.viewPetDetails = this.viewPetDetails.bind(this);
      }

    renderTableRows() {
        const { favoritesData } = this.state;
        if (!favoritesData) return null;
            let result = [];

            favoritesData.forEach(pet => {
                if (!pet[0]) return;
                result.push(
                    <div class="col-sm-4">
                        <h3>{pet[0].name}</h3>
                        <p>{pet[0].numUsers} others like this pet</p>
                        <img src={pet[0].photo} style={{cursor: 'pointer'}} onClick={() => { this.viewPetDetails(pet[0]) }}class="img-rounded" width="304" height="236"></img> 
                        <p>Age: {pet[0].age}</p>
                        <p>Gender: {pet[0].gender}</p>
                        <p>Breed: {pet[0].breed}</p>
                        <p>Distance: {pet[0].distance} miles away</p>
                        <a href={pet[0].url} target="_blank" class="btn btn-primary">Adopt Me!</a>
                    </div>
                )})

        return result;
        
    }

    viewPetDetails(pet) {
        //pass pet data to pet details page
        this.props.history.push( {pathname: "/petdetails",
        state: {details: pet,
            from: "favs",
          favoritesData: this.state.favoritesData,
          favoritesUrls: this.state.favoritesUrls} 
      });
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

    render() {
        return (
        <div>
            <center><h1>Favorites</h1></center>
            <Button id="submitBtn" type="submit" onClick={this.viewResults} variant="secondary">Back to Results</Button>{' '}

            <div class="container">
                <div class="row">
                    
                {this.renderTableRows()}

                </div>
            </div>
        </div>
    );
    }
}
export default Favorites;


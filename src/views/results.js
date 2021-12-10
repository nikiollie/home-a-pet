import React from 'react';
import { Pagination, Post } from "../components/pagination/pagination"

var fs = require('browserify-fs');

class Results extends React.Component {
    
    constructor(props){
        super(props);
        //checking if there are props from other pages (favorites page)
        this.state = {
            tableData: [{}],
            favoritesData: (this.props.location.state && this.props.location.state.favoritesData) ? this.props.location.state.favoritesData : [],
            favoritesUrls: (this.props.location.state && this.props.location.state.favoritesUrls) ? this.props.location.state.favoritesUrls : []
        };
      }
      
      //runs when page is loaded
      componentDidMount() {

        fs.readFile("./data.json", "utf-8", (err, data) => {
            if (err) throw err;
            data = JSON.parse(data);

            var animalData = [];
            var repeatCheckName = [];
            var repeatCheckAge = [];
            var repeatCheckGender = [];
            for (let i=0; i < 50; i++) {

                //select photo size
                var pic = '';
                if (data[i]?.photo?.length >= 1) {
                    pic = data[i].photo[0]["full"];
                } else {
                    //skipping pets without photos
                    continue;
                }
                
                //check status
                if (data[i].status !== "adoptable" || (data[i].name).toLowerCase().includes("adopted")) {
                    continue;
                }

                //don't show repeats
                if (repeatCheckName.includes((data[i].name).toLowerCase()) && repeatCheckAge.includes(data[i].age) && repeatCheckGender.includes(data[i].gender)) {
                    continue;
                }

                //check favorite status
                var fav = 0;
                if (this.state.favoritesUrls.includes(data[i].url)) {
                    fav = 1;
                }

                var usersFav = ((Math.SQRT2).toString().split("").reverse().join(""))[i%10];

                animalData.push({ 
                    type: data[i].type,
                    name: data[i].name, 
                    breed: data[i]?.breed?.["primary"],
                    age: data[i].age, 
                    gender: data[i].gender,
                    photo: pic, 
                    size: data[i].size,
                    distance: data[i].distance,
                    url: data[i].url,
                    favorite: fav,
                    numUsers: usersFav,
                    house_trained: data[i].attributes["house_trained"],
                    spayed_neutered: data[i].attributes["spayed_neutered"],
                    shots_current: data[i].attributes["shots_current"],
                    special_needs: data[i].attributes["special_needs"],
                    good_with_children: data[i].environment["children"],
                    good_with_dogs: data[i].environment["dogs"],
                    good_with_cats: data[i].environment["cats"]

                });

                console.log(animalData);

                repeatCheckName.push((data[i].name).toLowerCase());
                repeatCheckAge.push(data[i].age);
                repeatCheckGender.push(data[i].gender);

            }

            this.setState({tableData: animalData});
        })
      }

    render() {
        return (
    
        <div>
            <center><h1>Results</h1></center>

            <Pagination
                data={this.state.tableData}
                favoritesData={this.state.favoritesData}
                favoritesUrls={this.state.favoritesUrls}
                RenderComponent={Post}
                pageLimit={5}
                dataLimit={12}
            />
        </div>
    );
    }
}



export default Results;


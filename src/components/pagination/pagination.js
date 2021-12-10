import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './pagination.css';
import { Button } from 'react-bootstrap';

//https://academind.com/tutorials/reactjs-pagination

export function Post(props) {

  const { type, name, gender, age, url, distance, breed, photo, favorite, numUsers, house_trained, spayed_neutered, shots_current, special_needs, good_with_children, good_with_dogs, good_with_cats } = props.data;
  const history = useHistory();

  function handleSubmit(e) {
    var favoritesUrls = Pagination.favoritesUrls ? Pagination.favoritesUrls : props.favoritesUrls;
    var favoritesData = Pagination.favoritesData ? Pagination.favoritesData : props.favoritesData;
    
    const url = e.target.id;
    const heart = e.target.className;
    var addFlag = 0;
    if (heart === "bi-heart-fill ml-auto") {
        //remove pet url from favorites
        favoritesUrls = favoritesUrls.filter(fav => fav !== url);
        addFlag = 0;
        e.target.className = "bi-heart ml-auto";
    } else {
        //add pet url to favorites
        favoritesUrls = [url];      
        addFlag = 1;      
        e.target.className = "bi-heart-fill ml-auto";
    }

    //get pet data from tableData to update favorites data
    const pet = props.data;
    var animalData = [];

        if (pet.url === url) {
            animalData.push({ 
                type: pet.type,
                size: pet.size,
                name: pet.name, 
                breed: pet.breed,
                age: pet.age, 
                gender: pet.gender,
                photo: pet.photo, 
                size: pet.size,
                distance: pet.distance,
                url: pet.url,
                favorite: pet.favorite,
                numUsers: pet.numUsers,
                house_trained: pet.house_trained,
                spayed_neutered: pet.spayed_neutered,
                shots_current: pet.shots_current,
                special_needs: pet.special_needs,
                good_with_children: pet.good_with_children,
                good_with_dogs: pet.good_with_dogs,
                good_with_cats: pet.good_with_cats
            });
        }
    

    //add pet data 
    if (addFlag === 1) {
        console.log("Adding")
        favoritesData = [animalData]; 
    } else {
        //remove pet data
        console.log("Removing")
        const newFavorites = favoritesData.filter(t => t.length > 0 && t[0].url !== url);
        favoritesData = newFavorites;
    }

    if (Pagination.favoritesData && addFlag === 1) {
      Pagination.favoritesData = [...Pagination.favoritesData, ...favoritesData];
      Pagination.favoritesUrls = [...Pagination.favoritesUrls, ...favoritesUrls];
    } else {
      Pagination.favoritesData = favoritesData;
      Pagination.favoritesUrls = favoritesUrls;
    }

    console.log(Pagination.favoritesData);
    
  }

  function viewPetDetails() {
      //pass pet data to pet details page
      history.push( {pathname: "/petdetails",
      state: {details: props.data,
        from: "results",
        favoritesData: (Pagination.favoritesData) ? Pagination.favoritesData : [],
        favoritesUrls: (Pagination.favoritesUrls) ? Pagination.favoritesUrls : []} 
    });
  }

  return (
<div class="col-sm-4">
                        <div class="row">
                            <div class="col-sm-8 col-12">                            
                                <h3 style={{cursor: 'pointer'}} onClick={viewPetDetails}>{name}</h3>
                            </div>
                            <div class="col-sm-2 col-12">
                                <i 
                                className={
                                    favorite ? "bi-heart-fill ml-auto" : "bi-heart ml-auto"
                                }
                                onClick={handleSubmit} 
                                id={url} 
                                role="button" 
                                aria-label="Heart" 
                                style={{fontSize: 'x-large', color: 'cornflowerblue'}}>
                                </i>
                            </div>
                        </div>
                        <p>{numUsers} others like this pet</p>
                        <img src={photo} style={{cursor: 'pointer'}} onClick={viewPetDetails} class="img-rounded" width="304" height="236"></img> 
                        <p>Age: {age}</p>
                        <p>Gender: {gender}</p>
                        <p>Breed: {breed}</p>
                        <p>Distance: {distance} miles away</p>
                        <a href={url} target="_blank" class="btn btn-primary">Adopt Me!</a>
                    </div>
    );
  }

export function Pagination({ data, favoritesData, favoritesUrls, RenderComponent, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const history = useHistory();

    useEffect(() => {
      window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
      }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    function viewFavorites() {
      //pass favorites data to favorites page
      history.push( {pathname: "/favorites",
      state: {favoritesData: (Pagination.favoritesData) ? Pagination.favoritesData : [],
      favoritesUrls: (Pagination.favoritesUrls) ? Pagination.favoritesUrls : []} });
    };

    function newSearch() {
      //pass favorite data back to filter page
      history.push( {pathname: "/filter",
      state: {favoritesData: (Pagination.favoritesData) ? Pagination.favoritesData : [],
      favoritesUrls: (Pagination.favoritesUrls) ? Pagination.favoritesUrls : []} });
      
    }

    return (
        <div>      
          {/* show the posts, 10 posts at a time */}
          <div className="dataContainer">
          <center>
          <Button type="submit" onClick={newSearch} variant="secondary" className="marginCenter">New Search</Button>
          <Button type="submit" onClick={viewFavorites} variant="secondary" className="marginCenter">View Favorites</Button>{' '}
          </center>
          <div class="container">
                    <div class="row">
            {getPaginatedData().map((d, idx) => (

                    <RenderComponent key={idx} data={d}/>

            ))}

</div>
                </div>
          </div>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className="pagination">
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              prev
            </button>
      
            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              next
            </button>
          </div>
        </div>
      );
  }


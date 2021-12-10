import React from 'react';
import Cookies from 'js-cookie';
const myaccount = () =>{

  const email = Cookies.get('email')
  const name = Cookies.get('name')
  const imageURL = Cookies.get('imageUrl')
  const emailCriteria = Cookies.get('emailCriteria')
  var criteriaArr = [];
  if (emailCriteria) {
    criteriaArr = emailCriteria.split(',')
    criteriaArr[1] = criteriaArr[1] + " miles"
  } else {
    criteriaArr = ['','','','','','']
  }


  return (
    <div>
      <center><h1>Profile Info</h1></center>
      
      <br></br>
      <div class="container">
        <img src={imageURL} alt="Profile pic"></img>
        <br></br>
        <br></br>
        <h4>Name: <b>{name}</b></h4>
        <br></br>
        <h4>Email: <b>{email}</b></h4>
        <br></br>
        <h4>Email Notifications on for: </h4>
        <h5>Type: <b>{criteriaArr[0]}</b></h5>
        <h5>Distance: <b>{criteriaArr[1]}</b></h5>
        <h5>Zipcode: <b>{criteriaArr[2]}</b></h5>
        <h5>Gender: <b>{criteriaArr[3]}</b></h5>
        <h5>Age: <b>{criteriaArr[4]}</b></h5>
        <h5>Size: <b>{criteriaArr[5]}</b></h5>
      </div>
    </div>
  );
}
export default myaccount;
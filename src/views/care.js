import React from 'react';
import '../App.css';

class Care extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div jumbotron text-center>
      <center><h1>Pet care and responsibilities</h1></center>
      <br></br>
      <div>
          <p class="text-left"> 
            <h4> Be a responsible pet owner: </h4>
            <ol> 
              <li>Commit</li>
              <ol>
                <li>Avoid impulsive decisions when selecting a pet.</li>
                <li>Select a pet that's suited to your home and lifestyle.</li>
                <li>Keep only the type and number of pets for which you can provide appropriate food, water, shelter, health care and companionship.</li>
                <li>Commit to the relationship for the life of your pet(s).</li>
                <li>Provide appropriate exercise and mental stimulation.</li>
                <li>Properly socialize and train your pet.</li>
              </ol>
              <li>Invest</li>
              <ol>
                <li>Recognize that pet ownership requires an investment of time and money.</li>
                <li>Make sure your pet receives preventive health care (vaccinations, parasite control, etc.), as well as care for any illnesses or injuries.</li>
                <li>Budget for potential emergencies.</li>
              </ol>
              <li>Obey</li>
              <ol>
                <li>Clean up after your pet.</li>
                <li>Obey all local ordinances, including licensing, leash requirements and noise control.</li>
                <li>Don't allow your pet to stray or become feral.</li>
              </ol>
              <li>Identify</li>
              <ol>
                <li>Make sure your pet is properly identified (i.e., tags, microchips, or tattoos) and keep its registration up-to-date.</li>
              </ol>
              <li>Limit</li>
              <ol>
                <li>Don't contribute to our nation's pet overpopulation problem: limit your pet's reproduction through spay/neuter, containment or managed breeding.</li>
              </ol>
              <li>Prepare</li>
              <ol>
                <li>Prepare for an emergency or disaster, including assembling an evacuation kit.</li>
                <li>Make alternate arrangements if you can no longer provide care for your pet.</li>
                <li>Recognize any decline in your pet's quality of life and make timely decisions in consultation with a veterinarian.</li>
              </ol>
            </ol>
          </p>
        <h3>Read this before adopting a dog</h3>
        <p class="text-left"> 
          <a href="https://www.akc.org/expert-advice/lifestyle/responsible-dog-owner/">Before becoming a dog owner</a>
            
        </p>
        <br></br>
        <h3>Read this before adopting a cat</h3>
          <p class="text-left"> 
            <a href="https://icatcare.org/advice/thinking-of-getting-a-cat/">Before becoming a cat owner</a>
          </p>

        <h3>Read this before adopting other pets</h3>
          <p class="text-left"> 
            <a href="https://www.avma.org/resources-tools/avma-policies/guidelines-responsible-pet-ownership">Before becoming a other pet owner</a>
          </p>
      </div>
    </div>
  );
}
}
export default Care;

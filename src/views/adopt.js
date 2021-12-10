import React from 'react';
import '../App.css';

class Adopt extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div jumbotron text-center>
      <center><h1>Adoption information</h1></center>
      <br></br>
      <div>
          <p class="text-left"> 
            If you have never adopted a pet, the process can be quite overwelming. 
            There are options of Adopting from Rescue, adopting from a shelter and, adopting from a previous owner.
            We will look at all of these options and help you choose the one which fits you the most. 
          </p>
        <h3>Adopting from a previous owner</h3>
        <p class="text-left"> 
            When you are browsing through pets and have decided on a pet, you visit the home website. In the website,
            most of them mention if the pet is from a previous owner or it is from a shelter. When you are redirected
            to a shelter, the pet is from the shelter. But if the pet is from a previous owner, you will have the option 
            of contacting the owner for more information. 

            <br></br>
            <br></br>

            If you do contact the owner, the owner will be notified about your application. They will have a chance to 
            review it and get back to you if they are interested.

            The decision is entirely up to the owner whether to choose a particular application or not. The owner could 
            also more questions for information, you could do the same before you confirm the pet. You could plan to meet
            with the owner and finally adopt the pet.
        </p>
        <br></br>
        <h3>Adopting from a shelter</h3>
          <p class="text-left"> 
            Shelters include public shelters like the city and county animal shelters, animal control, police and health departments, dog wardens, and are often called the pound. 
            There are also private shelters that might use the words “humane society” or “SPCA” in their name. 
            They are all separate, independently run organizations or government offices. 
            
            Shelters often have a physical facility, with staff, and operating hours. 
            Some have volunteers and do adoption events around town too. 
            When you are redirected to a shelter, the pet is from the shelter. A shelter has an address with business hours, the easiest way to adopt that pet may be to go visit. 
            That’s because some shelters are under-staffed and may not answer all phone calls or emails. 


            Each shelter’s adoption process is different. Here’s an example of how a shelter adoption might work:
              <br></br>
              <br></br>
              1. You find a pet you want to adopt who’s at a shelter.
              <br></br>
              2. On the pet’s page, that shelter’s Adoption Process might direct you to visit the shelter facility during their adoption hours, or to email them for an appointment. 
              You go to the shelter and see the pet. 
              <br></br>
              3. You go to the shelter’s front desk, give them your photo ID, pay the adoption fee (average range is $25 to $200), and get copies of the pet’s vaccination records and sterilization certificate so you can get him licensed.
              <br></br>
              4. You take your new pet home!
          </p>

        <h3>Adopting from a rescue</h3>
          <p class="text-left"> 
            Rescues most often have their pets in foster homes or private boarding facilities, and are run by volunteers.
            They may have adoption events at pet stores on the weekends. If you see a pet which is at a Rescue, 
            be sure to read the pet description and the Adoption Process under that, and follow each rescue’s instructions.
            Some prefer you email them first, some prefer you fill out their application before asking about a pet, so they can answer your questions more knowledgeably.
            
            Each rescue’s adoption process is different. Here’s one example of how a rescue adoption might work:
              <br></br>
              <br></br>
              1. You find a pet you want to adopt who’s at a rescue.
              <br></br>
              2. You read that pet’s Adoption Process. It says fill out their online application, and there’s a link on that pet’s page to that rescue’s website and application. 
              The next day, one of the rescue’s volunteers calls you and you talk to them more about the pet. 
              It seems like a good match, and agree to come meet the pet at their adoption event in a local pet store that weekend.
              <br></br>
              3. An event volunteer calls a home check volunteer, and you all arrange for a home visit. After the home visit, 
              you get a call from a volunteer to let you know you will be the home adopting the pet! 
              They email you copies of his vaccination and sterilization records. You arrange a delivery day for your new pet.
              <br></br>
              4. Your new pet is brought by his foster volunteer to your home! 
              You sign their adoption contract and pay their adoption fee (usually ranges from $100 to $300 but sometimes more).

          </p>
      </div>
    </div>
  );
}
}
export default Adopt;

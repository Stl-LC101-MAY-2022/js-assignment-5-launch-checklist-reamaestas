// Write your JavaScript code here!

window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let pilot = pilotName.value; 
        let copilotName = document.querySelector("input[name=copilotName]");
        let copilot = copilotName.value; 
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuel = fuelLevel.value; 
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargo = cargoMass.value;
        });
   
});
function what() {
  alert("Holding a Draco and an AR15 in a free state");
}

var API_KEY = '10302021-60e84cf7410d449b64be5d1c9';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('$(":input")');

axios.get(URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// function getCar(make) {
//   axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`)
//   .then(results => {
//       console.log(results)
//       const car = results.data.Results;  
//       console.log(car);
  
//       for(var i=0; i < car.length; i++){
//         const carModel = car[i].Model_Name;
//         console.log(i+1, carModel);

//         // const models = document.getElementById("models");
//         let li = document.createElement('li');   
//         li.innerHTML = createListItem(carModel);
//         models.appendChild(li);
//       } 
     
//   })
//   .catch(err => {
//     console.error("Coding in Progress", err.message);
//   })
// }
  
// function createListItem (model) {
// return `
//   <li class="list-group-item">${model}</li>
// `
// }
// /**
// * This handles the onsubmit on the form.
// * @param {Object} event 
// */
// function handleSubmit(event) {
// event.preventDefault();
// const make = document.getElementById('make').value;
// const models = document.getElementById("models");
// models.innerHTML = "";
// getCar(make);
// }

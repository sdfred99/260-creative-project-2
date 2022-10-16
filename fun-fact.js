// function onClick(e) {
//   e.preventDefault();
//   // get form values
//   let number = document.getElementById('number').value;
//   let s = document.getElementById('selector');
//   let type = s.options[s.selectedIndex].value;

//   // check if number is empty
//   if (number === "") {
//     number = "random";
//   }

//   // setup URL
//   // The cslone.byu.edu forwards to the numbers API but converts it to https
//   let url = "https://asli-fun-fact-api.herokuapp.com/" + "type" + "?json";
//   // call API
//   fetch(url)
//     .then(function(response) {
//       // make sure the request was successful
//       debugger
//       if (response.status != 200) {
//         return {
//           text: "Error calling the Numbers API service: " + response.statusText
//         }
//       }
//       return response.json();
//     }).then(function(json) {
//       // update DOM with response
//       updateResult(json.text);
//     });
// }

// function getFunFact(info) {
//   document.getElementById('result').textContent = info;
// }

document.getElementById('factButton').addEventListener('click', function(event) {
    event.preventDefault();
    const url = "https://asli-fun-fact-api.herokuapp.com/"
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            updateResult(json.data.fact);
        })
    
})

function updateResult(info) {
    console.log(info)
  document.getElementById('result').textContent = info;
}

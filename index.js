// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.

function submitData(name, email){

    const output = document.querySelector("body")

    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
      .then(function(object) {
        output.innerHTML = object.id

        console.log(object.id);
    })
    .catch(function(error) {
        output.innerHTML = error.message
        });    
}

//submitData("foo", "foo@foo.com")
//submitData()
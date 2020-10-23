document.getElementById("dogSubmit").addEventListener("click", function(event) {
  event.preventDefault()
  let input = document.getElementById('dogInput').value;

  if (input === "random") {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then(function(response) {
        if (response.status != 200) {
          return {
            text: "Error calling the Numbers API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        updateResult(json.message);
      });
  }
  else {
    let url = "https://dog.ceo/api/breed/" + input + "/images/random";
    fetch(url)
      .then(function(response) {
        if (response.status != 200) {
          return {
            text: "Error calling the Numbers API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        updateResult(json.message);
      });
  }
});

function updateResult(url) {
  var image = document.getElementById('dogImage');
  image.src = url;
}

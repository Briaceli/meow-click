window.onload = function() {
  console.log("READY!!! MEOW!!!");
};
//Get Button element
var searchGiphyButton = document.getElementById("getMeow");

searchGiphyButton.addEventListener("click", function() {
  //go get kitten gifs
  console.log("Meow Click Click!!!");
  fetchGiphy();
});

function fetchGiphy() {
  var xhr = new XMLHttpRequest();
  //open
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten"
  );

  xhr.onload = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr.response);
    }
  };
  xhr.send();
}

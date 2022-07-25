document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    console.log("here")
    if (!event.target.matches("#button")) return;
  
    fetch("https://karljoke.herokuapp.com/jokes/random", {
        method: 'GET',
    })
    .then(res => res.json())
    .then((joke) => renderJoke(joke))
    .catch(err => console.error(err));
  });

  function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
  }
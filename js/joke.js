document.addEventListener("click", function (event) {

if (!event.target.matches("#jokebutton")) return;
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit", {
    method: 'GET',
})
.then(res => res.json())
.then((joke) => renderJoke(joke))
.catch(err => renderError());
});

function renderJoke(data) {
    $("#setup").removeClass("setupC");
    $('#setup').width();
    $("#setup").addClass("setupC");
    $("#punchline").removeClass("punchC");
    $('#punchline').width();
    $("#punchline").addClass("punchC");
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.delivery;
}

function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
}
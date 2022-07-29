document.addEventListener("click", function (event) {

    if (!event.target.matches("#jokebutton")) return;
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes", {
        method: 'GET',
    })
    .then(res => res.json())
    .then((meme) => renderMeme(meme))
    .catch(err => renderError());
    });
    
    function renderMeme(data) {
        const title = document.getElementById("title");
        title.innerHTML = data.title;
        console.log(data.url)
        document.getElementById("meme").src = data.url;
        
    }
    
    function renderError() {
        const error = document.getElementById("error");
        error.innerHTML = "Whoops, something went wrong. Please try again later!";
    }
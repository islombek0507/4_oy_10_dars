let elMovieList = document.querySelector(".movie-list");
let elMoviePost = document.querySelector(".movei-post");
let elMovieCom = document.querySelector(".movei-com");



function renderMovies(array, node) {
    node.innerHTML = null
    let moviesFragment = document.createDocumentFragment()

    array.forEach(item => {
        let newLi = document.createElement("li")
        let newTitle = document.createElement("p")
        let newBody = document.createElement("p")

        newLi.dataset.movieId = item.id
        newLi.textContent = item.id
        newTitle.textContent = item.name
        newBody.textContent = item.email

        newLi.appendChild(newTitle)
        newLi.appendChild(newBody)

        moviesFragment.appendChild(newLi)
    });

    node.appendChild(moviesFragment)
}
function renderPostMovies(array, node) {
    node.innerHTML = null
    let moviesFragment = document.createDocumentFragment()

    array.forEach(item => {
        let newLi = document.createElement("li")
        let newTitle = document.createElement("p")
        let newBody = document.createElement("p")

        newLi.dataset.movieId = item.id
        newLi.textContent = item.id
        newTitle.textContent = item.name
        newBody.textContent = "Post: \n" + item.body

        newLi.appendChild(newTitle)
        newLi.appendChild(newBody)

        moviesFragment.appendChild(newLi)
    });

    node.appendChild(moviesFragment)
}

function renderComMovies(array, node) {
    node.innerHTML = null
    let moviesFragment = document.createDocumentFragment()

    array.forEach(item => {
        let newLi = document.createElement("li")
        newLi.setAttribute("class", "item")
        let newTitle = document.createElement("p")
        let newBody = document.createElement("p")

        newLi.dataset.movieId = item.id
        newLi.textContent = item.id
        newTitle.textContent = item.name
        newBody.textContent =  item.body

        newLi.appendChild(newTitle)
        newLi.appendChild(newBody)

        moviesFragment.appendChild(newLi)
    });
    node.appendChild(moviesFragment)
}



;(async function(params) {
    let responce = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await responce.json();
    renderMovies(data, elMovieList)
   
})();


elMovieList.addEventListener("click", function (evt) {
    let foundUser = evt.target.dataset.movieId

    if (foundUser) {
        ;(async function() {
            let responce = await fetch(`https://jsonplaceholder.typicode.com/users/${foundUser}/posts`);
            let data = await responce.json();
            console.log(data);
            renderPostMovies(data, elMoviePost)
        })();
    }
})
elMoviePost.addEventListener("click", function (evt) {
    let foundPost = evt.target.dataset.movieId

    if (foundPost) {
        ;(async function() {
            let responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${foundPost}/comments`);
            let data = await responce.json();
            console.log(data);
            renderComMovies(data, elMovieCom)
        })();
    }
})



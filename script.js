function onLoadOfBody(){
    fetch("https://www.omdbapi.com/?apikey=a02ffa55&t=Spider-Man:+No+Way+Home&plot=full")
    .then(response=>response.json())
    .then(moviesData =>{

            const movieTitle = moviesData.Title;
            const movieYear = moviesData.Year;
            const movieRated = moviesData.Rated;
            const movieReleased = moviesData.Released;
            const movieRuntime = moviesData.Runtime;
            const movieGenre = moviesData.Genre;
            const movieDirector = moviesData.Director;
            const movieWriter = moviesData.Writer;
            const movieActors = moviesData.Actors;
            const moviePlot = moviesData.Plot;
            const movieLanguage = moviesData.Language;
            const movieCountry = moviesData.Country;
            const movieAwards = moviesData.Awards;
            const moviePoster = moviesData.Poster;
            const movieimdbRating = moviesData.imdbRating;
            const movieBoxOffice = moviesData.BoxOffice;

            const card = document.createElement("div");

            const dataCard = `
                            <div class="container m-3 p-2">
                                <div class="card p-2 bg-light">
                                    <div class="row">
                                        <div>
                                            <p class="badge bg-danger text-wrap">Movie</p>
                                        </div>
                                    </div>
                                    <div class="row g-0">
                                        <div class="col-md-2">
                                            <br>
                                            <img src="${moviePoster}"
                                                alt="${movieTitle}" class="card-img-top  border border-dark rounded-2" height="260px"
                                                width="165px">
                                        </div>
                                        <div class="col-md-10 ">
                                            <div class="card-body">
                                                <h5 class="card-title">${movieTitle}</h5>
                                                <p class="badge bg-danger">${movieRated}</p>
                                                <p class="badge bg-warning">${movieYear}</p>
                                                <p class="badge bg-primary">${movieRuntime}</p>
                                                <p class="badge bg-success">${movieGenre}</p>
                                                <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}</p>
                                                <p class="badge bg-success">${movieLanguage}</p>
                                            </div>
                                            <ul class="list-group flush px-3">
                                                <li class="list-group-item">Director : ${movieDirector}</li>
                                                <li class="list-group-item">Writer : ${movieWriter}</li>
                                                <li class="list-group-item">Actor : ${movieActors}</li>
                                                <li class="list-group-item">Awards : ${movieAwards}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row g-0">
                                        <div>
                                            <p class="badge bg-danger text-wrap">Plot</p>
                                        </div>                                                                        
                                    </div>
                                    <div class="row g-0">
                                        <p> ${moviePlot} </p>
                                    </div>
                                    <div class="row g-0">
                                        <div>
                                            <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                            <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                            <p class="badge" style="background-color:#222831;">Box Office : ${movieBoxOffice}</p>
                                        <div>
                                    </div>
                                </div>
                            </div>
                            `
            document.getElementById("shelf").innerHTML += dataCard;
    })
}




function onSearchOfMovie(){
    let myMovieSearchName = document.getElementById("mySearchName").value;

    if(myMovieSearchName == ""){
        alert("Please Enter Movie name");
    } else{
        fetch(`https://www.omdbapi.com/?apikey=a02ffa55&t=${myMovieSearchName}&plot=full`)
        .then(response=>response.json())
        .then(moviesData =>{

            const movieResponse = moviesData.Response;
            const typeOfVideo = moviesData.Type;
            const totalSeason = moviesData.totalSeasons;
            const movieTitle = moviesData.Title;
            const movieYear = moviesData.Year;
            const movieRated = moviesData.Rated;
            const movieReleased = moviesData.Released;
            const movieRuntime = moviesData.Runtime;
            const movieGenre = moviesData.Genre;
            const movieDirector = moviesData.Director;
            const movieWriter = moviesData.Writer;
            const movieActors = moviesData.Actors;
            const moviePlot = moviesData.Plot;
            const movieLanguage = moviesData.Language;
            const movieCountry = moviesData.Country;
            const movieAwards = moviesData.Awards;
            const moviePoster = moviesData.Poster;
            const movieimdbRating = moviesData.imdbRating;
            const movieBoxOffice = moviesData.BoxOffice;
            const errMessage = "No result available... <br> Search another movie";                                         
            if(movieResponse == "False"){
                document.getElementById("shelf").innerHTML = `<h4>${errMessage}</h4>`;
            } else if(movieResponse == "True") {

                if(typeOfVideo == "movie"){
                    const card = document.createElement("div");

                    const dataCard = `
                                    <div class="container m-3 p-2">
                                        <div class="card p-2 bg-light">
                                            <div class="row">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Movie</p>
                                                </div>    
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-md-2">
                                                    <br>
                                                    <img src="${moviePoster}"
                                                        alt="${movieTitle}" class="card-img-top  border border-dark rounded-2" height="260px"
                                                        width="165px">
                                                </div>
                                                <div class="col-md-10 ">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${movieTitle}</h5>
                                                        <p class="badge bg-danger">${movieRated}</p>
                                                        <p class="badge bg-warning">${movieYear}</p>
                                                        <p class="badge bg-primary">${movieRuntime}</p>
                                                        <p class="badge bg-success">${movieGenre}</p>
                                                        <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}</p>
                                                        <p class="badge bg-success">${movieLanguage}</p>
                                                    </div>
                                                    <ul class="list-group flush px-3">
                                                        <li class="list-group-item">Director : ${movieDirector}</li>
                                                        <li class="list-group-item">Writer : ${movieWriter}</li>
                                                        <li class="list-group-item">Actor : ${movieActors}</li>
                                                        <li class="list-group-item">Awards : ${movieAwards}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Plot</p>
                                                </div>                                                                        
                                            </div>
                                            <div class="row g-0">
                                                <p> ${moviePlot} </p>
                                            </div>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                                    <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                                    <p class="badge" style="background-color:#222831;">Box Office : ${movieBoxOffice}</p>
                                                <div>
                                            </div>
                                        </div>
                                    </div>
                                    `
                    document.getElementById("shelf").innerHTML = dataCard;
                } else if(typeOfVideo == "series") {
                    const card = document.createElement("div");

                    const dataCard = `
                                    <div class="container m-3 p-2">
                                        <div class="card p-2 bg-light">
                                            <div class="row">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Series</p>
                                                </div>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-md-2">
                                                    <br>
                                                    <img src="${moviePoster}"
                                                        alt="${movieTitle}" class="card-img-top  border border-dark rounded-2" height="260px"
                                                        width="165px">
                                                </div>
                                                <div class="col-md-10 ">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${movieTitle}</h5>
                                                        <p class="badge bg-danger">${movieRated}</p>
                                                        <p class="badge bg-warning">${movieYear}</p>
                                                        <p class="badge bg-primary">${movieRuntime}</p>
                                                        <p class="badge bg-success">${movieGenre}</p>
                                                        <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}</p>
                                                        <p class="badge bg-success">${movieLanguage}</p>
                                                    </div>
                                                    <ul class="list-group flush px-3">
                                                        <li class="list-group-item">Seasons : ${totalSeason}</li>
                                                        <li class="list-group-item">Director : ${movieDirector}</li>
                                                        <li class="list-group-item">Writer : ${movieWriter}</li>
                                                        <li class="list-group-item">Actor : ${movieActors}</li>
                                                        <li class="list-group-item">Awards : ${movieAwards}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Plot</p>
                                                </div>                                                                        
                                            </div>
                                            <div class="row g-0">
                                                <p> ${moviePlot} </p>
                                            </div>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                                    <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                                <div>
                                            </div>
                                        </div>
                                    </div>
                                    `
                    document.getElementById("shelf").innerHTML = dataCard;
                }                
            }                
        })
    }
}


    

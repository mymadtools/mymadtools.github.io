let counter = 0;
function onLoadOfBody(){
    let defaultkeyword = "harry+potter";
    fetch(`https://www.omdbapi.com/?apikey=a02ffa55&s=${defaultkeyword}&plot=full&page=1`)
    .then(response=>response.json())
    .then(moviesData =>{
        let searchLength = moviesData.Search.length;
        let totalSearchResults = moviesData.totalResults;

        function pagination(){
            let totalPages = totalSearchResults/searchLength;
            totalPages = Math.ceil(totalPages);
            return totalPages;
        }
        let totalNoOfPages = pagination();

        for(let i = 1 ; i<=totalNoOfPages; i++){   

            fetch(`https://www.omdbapi.com/?apikey=a02ffa55&s=${defaultkeyword}&plot=full&page=${i}`)
            .then(response=>response.json())
            .then(moviesData =>{
            
                for(let j=0; j<searchLength; j++){
                    let movieTitle = moviesData.Search[j].Title;
                    let movieYear = moviesData.Search[j].Year;
                    let moviePoster = moviesData.Search[j].Poster;
                    let typeOfVideo = moviesData.Search[j].Type;
                    let imDbId = moviesData.Search[j].imdbID;

                    let card = document.createElement("div");
                  

                 

                    let dataCard = `
                    <div class="card  p-2 bg-light" style="width:250px">
                        <p class="badge bg-danger text-wrap">${typeOfVideo}</p>
                        <img src="${moviePoster}" alt="${movieTitle}" class="card-img-top  border border-dark rounded-2"
                                    height="260px" width="165px">
                        <div class="card-body">
                            <p class="card-title">${movieTitle} (${movieYear})</p>                            
                        </div>
                    </div>                    
                       `
                       document.getElementById("shelf").innerHTML += dataCard;
                
                }

                let pageRedirect = `
                <div class="row">
                    <div class="col-md-0 col-sm-0"></div>
                    <div class="col-md-12 col-sm-12">
                        <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item"><a class="page-link" href="">&#10083;</a></li>
                                <li class="page-item"><a class="page-link" href="">Total Results : ${totalSearchResults}</a></li>
                                <li class="page-item"><a class="page-link" href="">&#10083;</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                `
                document.getElementById("pagiNation").innerHTML = pageRedirect;
            })                        
        }

        
            
    })
}




/*
function showPopUp(imDbId){
    fetch(`https://www.omdbapi.com/?apikey=a02ffa55&i=${imDbId}`)
    .then(response=>response.json())
    .then(videoData =>{
        let videoType = videoData.Type;
        let videoTitle = videoData.Title;
        let videoYear = videoData.Year;
        let videoRated = videoData.Rated;
        let videoReleased = videoData.Released;
        let videoRuntime = videoData.Runtime;
        let videoGenre = videoData.Genre;
        let videoDirector = videoData.Director;
        let videoWriter = videoData.Writer;
        let videoActors = videoData.Actors;
        let videoPlot = videoData.Plot;
        let videoLanguage = videoData.Language;
        let videoCountry = videoData.Country;
        let videoAwards = videoData.Awards;
        let videoPoster = videoData.Poster;
        let videoimdbRating = videoData.imdbRating;
        let videototalSeasons = videoData.totalSeasons;


        
        
    if(true){
        let card = document.createElement("div");
        
        movieButtonCards = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="container p-2">
                        <div class=" p-2 bg-light">
                            <div class="row">
                                <div>
                                    <p class="badge bg-danger text-wrap">${videoType}</p>
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <br>
                                    <img src="${videoPoster}" alt="${videoTitle}" class="card-img-top  border border-dark rounded-2"
                                        height="260px" width="165px">
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h5 id="tempId" class="card-title">${imDbId}</h5>
                                        <p class="badge bg-danger">${counter}</p>
                                        <p class="badge bg-danger">${videoRated}</p>
                                        <p class="badge bg-warning">${videoYear}</p>
                                        <p class="badge bg-primary">${videoRuntime}</p>
                                        <p class="badge bg-success">${videoGenre}</p>
                                        <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${videoimdbRating}
                                        </p>
                                        <p class="badge bg-success">${videoLanguage}</p>
                                    </div>
                                    <ul class="list-group flush px-3">
                                        
                                        <li class="list-group-item">Director : ${videoDirector}</li>
                                        <li class="list-group-item">Writer : ${videoWriter}</li>
                                        <li class="list-group-item">Actor : ${videoActors}</li>
                                        <li class="list-group-item">Awards : ${videoAwards}</li>
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
                                <p> ${videoPlot} </p>
                            </div>
                            <div class="row g-0">
                                <div>
                                    <p class="badge" style="background-color:#222831;">Country : ${videoCountry}</p>
                                    <p class="badge" style="background-color:#222831;">Release Date : ${videoReleased}</p>
                                <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("shelf").innerHTML += movieButtonCards;


    }else if(videoType == "series"){

    }else if(videoType == "game"){

    }
    })
}
*/



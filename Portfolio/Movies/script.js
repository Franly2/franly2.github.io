// ! Fetch

const searchButton = document.body.querySelector(`.search-button`);
const noteText=document.body.querySelector(`.note`)
searchButton.addEventListener(`click`, function () {
  input = document.body.querySelector(`.input-keyword`);
  fetch(`http://www.omdbapi.com/?apikey=81fd2841&s=` + input.value)
    .then((respon) => respon.json()
      .then((x) => {
        if(x.Response  == "False"){
          console.log("error")
          noteText.classList.remove(`visually-hidden`)
        let movieContainer = document.body.querySelector(`.movie-container`);
          movieContainer.classList.add(`visually-hidden`)
          noteText.classList.remove(`visually-hidden`)

        }else{
          const movie = x.Search;
        console.log(movie);
        let movieContainer = document.body.querySelector(`.movie-container`);
        noteText.classList.add(`visually-hidden`)
        movieContainer.classList.remove(`visually-hidden`)
        let cards = "";
        movie.forEach((m) => (cards += showCards(m)));
        movieContainer.innerHTML = cards;
        // jika tombol di-klik
        let buttons = document.body.querySelectorAll(`.modal-detail-button`);
        buttons.forEach((button) => {
          button.addEventListener(`click`, function () {
            const imdbId = this.dataset.imdbid;
            fetch(`http://www.omdbapi.com/?apikey=81fd2841&i=` + imdbId)
              .then((respon) =>respon.json()
                .then((m) => {
                 console.log(m);
                 let modalBody = document.body.querySelector(`.modal-body`);
                 let modalContent = showMovieDetail(m);
                 modalBody.innerHTML = modalContent;
                })
            );
          });
        });
      }
        }
        
        )
  );
});


function showCards(m) {
  return `<div class="col-md-3 my-5 ">
    <div class="card rounded-4 card border-black mb-3 text-light bg-dark">
      <img src="${m.Poster}" class="card-img-top" alt="" />
      <div class="card-body glass">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 ">${m.Year}</h6>
        <a href="#" class="btn btn-secondary modal-detail-button"data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid ">
     <div class="row">
       <div class="col-md-3">
         <img src="${m.Poster}" class="img-fluid" />
       </div>
       <div class="col-md">
         <ul class="list-group">
           <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
           <li class="list-group-item">
             Director : <strong>${m.Director}</strong>
           </li>
           <li class="list-group-item">Actor : ${m.Actors}</li>
           <li class="list-group-item">Genre : ${m.Genre}</li>
           <li class="list-group-item">Plot : ${m.Plot}</li>
         </ul>
       </div>
     </div>
   </div>`;
}

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const img_url = "https://image.tmdb.org/t/p/original/";
    this.className = "col-lg";
    this.innerHTML = `
      <style>
        .card {
          border: none;
          background: none;
          width: 12rem;
          cursor: pointer;
        }
        
        .card-body {
          padding: 15px 5px;
        }
        
        .card-text {
          display: flex;
          justify-content: space-between;
        }
        
        .card-text span {
          color: #b2bec3 !important;
          font-weight: 200;
        }
      </style>

      <div class="card" data-id="${this._movie.id}" style="width: 15rem;">
        <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}"/> 
        <div class="card-body">
          <h5 class="card-title text-truncate">${this._movie.title}</h5>
          <p class="card-text">
            <span class="float-left">Release Date: ${this._movie.release_date}</span>
            <span class="float-right">Vote Average: ${this._movie.vote_average}</span>
          </p>  
        </div>
      </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);

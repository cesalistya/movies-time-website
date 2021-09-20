class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.className = "col mb-4";
    this.innerHTML = `
      <style>
        .card {
          border: none;
          background: none;
          max-width: 12rem;
          cursor: pointer;
        }

        .card-img {
          height: 280px;
        }
        
        .card-body {
          padding: 15px 5px;
        }
        
        .card-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-text span {
          color: #b2bec3 !important;
          font-weight: 400;
        }
      </style>

      <div class="card card-movie" data-id="${this._movie.id}">
          <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img card-img-top" alt="${this._movie.title}" />
          <div class="card-body">
              <h5 class="card-title text-truncate">${this._movie.title}</h5>
              <p class="card-text">
                  <span>${this._movie.release_date}</span>
                  <span>
                    <i class="bi bi-star-fill"></i>
                    ${this._movie.vote_average}
                  </span>
              </p>
          </div>
      </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);

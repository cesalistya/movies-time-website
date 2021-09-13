class HeaderBanner extends HTMLElement {
  set banner(banner) {
    this._banner = banner;
    this.render();
  }

  render() {
    // img url
    const img_url = "https://image.tmdb.org/t/p/original";

    this.innerHTML = `
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-id="${this._banner.id}">
        <img
          src="${img_url + this._banner.backdrop_path}"
          class="d-block w-100 bg-placeholder-img"
          alt="Movies"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 id="title-movie">${this._banner.original_title}</h1>
            <p id="description-movie">
              ${this._banner.overview}
            </p>
            <div class="d-grid gap-2 d-md-block mt-4 ">
              <button class="btn btn-custom" type="button">
                Play Now
              </button>
              <button class="btn btn-outline-dark" type="button">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-id="${this._banner.id}">
        <img
          src="${img_url + this._banner.backdrop_path}"
          class="d-block w-100 bg-placeholder-img"
          alt="Movies"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 id="title-movie">${this._banner.original_title}</h1>
            <p id="description-movie">
              ${this._banner.overview}
            </p>
            <div class="d-grid gap-2 d-md-block mt-4">
              <button class="btn btn-custom" type="button">
                Play Now
              </button>
              <button class="btn btn-outline-dark" type="button">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-id="${this._banner.id}">
        <img
          src="${img_url + this._banner.backdrop_path}"
          class="d-block w-100 bg-placeholder-img"
          alt="Movies"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 id="title-movie">${this._banner.original_title}</h1>
            <p id="description-movie">
              ${this._banner.overview}
            </p>
            <div class="d-grid gap-2 d-md-block mt-4">
              <button class="btn btn-custom" type="button">
                Play Now
              </button>
              <button class="btn btn-outline-dark" type="button">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    `;
  }
}

customElements.define("header-banner", HeaderBanner);

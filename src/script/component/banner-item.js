class BannerItem extends HTMLElement {
  set banner(item) {
    this._item = item;
    this.render();
  }

  render() {
    const img_url = "https://image.tmdb.org/t/p/original";
    this.innerHTML = `
            <div class="carousel-item" data-id="${this._item.id}">
              <img
                src="${img_url + this._item.backdrop_path}"
                class="d-block w-100 bg-placeholder-img"
                alt="Movies"
              />

              <div class="container">
                <div class="carousel-caption text-start">
                  <h1 id="title-movie">${this._item.original_title}</h1>
                  <p id="description-movie">
                    ${this._item.overview}
                  </p>
                  <div class="d-grid gap-2 d-md-block">
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
    `;
  }
}

customElements.define("banner-item", BannerItem);

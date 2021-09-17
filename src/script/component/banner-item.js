class BannerItem extends HTMLElement {
  set banner(item) {
    this.item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .carousel {
        margin-bottom: 4rem;
      }
      
      .carousel-caption {
        max-width: 35rem;
        bottom: 3rem;
        z-index: 10;
        background-color: transparent;
      }
      
      .carousel-caption #title-movie {
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        color: #f39c12 !important;
        font-weight: 600;
      }
      
      .carousel-caption #description-movie {
        font-weight: 300;
      }
      
      .carousel-item {
        height: 32rem;
        min-height: 300px;
      }
      
      .carousel-item::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
      
      .carousel-item > img {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        height: 32rem;
      }
      
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      
      </style>

      <img src="https://image.tmdb.org/t/p/original/${this.item.backdrop_path}" class="d-block w-100 bg-placeholder-img" alt="${this.item.original_title}"/>
      <div class="carousel-caption text-start">
        <h1 id="title-movie">${this.item.original_title}</h1>
        <p id="description-movie">${this.item.overview}</p>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-custom" type="button">Play Now</button>
          <button class="btn btn-outline-dark" type="button">More Details</button>
        </div>
      </div>     
    `;
  }
}

customElements.define("banner-item", BannerItem);

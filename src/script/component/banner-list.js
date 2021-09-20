import "./banner-item.js";

class BannerList extends HTMLElement {
  set banners(items) {
    this._items = items;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>

    <h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this.className = "carousel-inner";
    this._items.forEach((item, i) => {
      const bannerItem = document.createElement("banner-item");
      if (i == 0) {
        bannerItem.className = "carousel-item active";
      } else {
        bannerItem.className = "carousel-item";
      }
      bannerItem.banner = item;
      this.appendChild(bannerItem);
    });
  }
}

customElements.define("banner-list", BannerList);

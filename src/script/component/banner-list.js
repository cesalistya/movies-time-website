import "./banner-item.js";

class BannerList extends HTMLElement {
  set banners(items) {
    this.items = items;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this._items.forEach((item) => {
      const bannerItem = document.createElement("banner-item");
      bannerItem.item = item;
      this.appendChild(bannerItem);
    });
  }
}

customElements.define("banner-list", BannerList);

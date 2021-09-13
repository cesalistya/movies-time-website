class HeaderNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">MoviesTime</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movie-page.html">All Movies</a>
              </li>
            </ul>
            <div class="search-form form-group">
              <input
                placeholder="Search the movies..."
                class="form-control me-2"
                id="searchElement"
                type="search"
              />
              <button
                class="btn btn-dark"
                id="searchButtonElement"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("header-navbar", HeaderNavbar);

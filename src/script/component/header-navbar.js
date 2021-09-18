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
    <style>
      .navbar-brand {
        font-weight: 500;
        font-size: 28px;
        color: #d63031 !important;
      }
      
      .nav-link {
        font-weight: 400;
        color: #000;
      }
      
      .navbar-toggler {
        background-color: #212529;
      }
      
      .search-form {
        display: flex;
      }
      
      .search-form .form-control {
        text-align: center;
        border-color: black;
      }
      
      input[type="search"] {
        background-color: #f8f8f8;
        border: 0;
        color: #000 !important;
      }
      
      @media (min-width: 992px) {
        .nav-link:hover::after {
          content: "";
          display: block;
          border-bottom: 3px solid #f8f8f8;
          width: 50%;
          margin: auto;
          padding-bottom: 5px;
          margin-bottom: -8px;
        }
      }    
    </style>

    <nav class="navbar navbar-expand-lg navbar-light py-3 container-xxl">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">MoviesTime</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#main">All Movies</a>
            </li>
          </ul>
          
          <div class="search-form form-group">
            <input placeholder="Search the movies..." class="form-control me-2" id="searchElement" type="search"/>
            <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
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

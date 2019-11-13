import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav class="navbar sticky-top navbar-expand-sm navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand navText d-lg-inline-block" href="index.html"> <i class="far fa-paper-plane fa-sm"></i> TripIn </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavDropdown" class="navbar-collapse collapse flex-row-reverse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link navText" href="submit.html">LOGIN</a>
        </li>
      </ul>
    </div>
    </nav>

  );
}

export default Nav;
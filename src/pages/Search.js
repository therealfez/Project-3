import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";




function Search() {
  return (
    <div id="search">
      <i class="fas fa-search" id="search-icon"></i>
      <form>
        <input type="text" id="search-input" name="search" autocomplete="off"></input>
      </form>
    </div>
  );
}


export default Search;

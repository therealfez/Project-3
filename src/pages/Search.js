import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import "./search.css"



function Search() {
  return (
    <div id="search">
      <input type="text"></input>
      <button>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}


export default Search;
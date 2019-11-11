import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

function Search() {
  return (
    <form>
    <div className="form-group">
        <label for="exampleFormControlInput1">Name of the City</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" />
    </div>
    <div className="form-group">
        <label for="exampleFormControlSelect1">Link to the image</label>
        {/* <select className="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select> */}
        <input type="text" class="form-control" id="exampleFormControlInput1" />
    </div>
    <div className="form-group">
        <label for="exampleFormControlSelect2">Rating</label>

        <div>
        <input type="radio" value="1" checked />
        <label>1</label>
        </div>
        <div>
        <input type="radio" value="2" />
        <label>2</label>
        </div>
        <div>
        <input type="radio" value="3" />
        <label>3</label>
        </div>
        <div>
        <input type="radio" value="4" />
        <label>4</label>
        </div>
        <div>
        <input type="radio" value="5" />
        <label>5</label>
        </div>

    </div>

    </form>

  );
}

export default Search;

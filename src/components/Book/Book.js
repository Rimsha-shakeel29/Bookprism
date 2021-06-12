import React, { Component } from "react";
import "./Book.css";
import { Link } from "react-router-dom";

class Book extends Component {
  altrnateimage = () => {
    console.log("image not found");
    this.onError = null;
    this.src = "images/extra.jpg";
  };

  render() {
    let { name, coverImagePath, bookId } = this.props.book;
    coverImagePath = "images/extra.jpg";
    if (coverImagePath === "") {
    }
    return (
      <React.Fragment>
        <div
          id="temp"
          className="col-4 col-sm-4 col-md-3 col-lg-2 col-Xl-2"
          style={{ backgroundColor: "white" }}
        >
          <Link
            to={{
              pathname: "/playvideo",
              properties: {
                id: bookId,
              },
            }}
          >
            <img
              src={coverImagePath}
              className="img-fluid img-thumbnail"
              alt=""
              onError={this.altrnateimage}
            />
            <div className="overlay">{name}</div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
export default Book;

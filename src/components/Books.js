import React, { Component } from "react";
import Book from "./Book/Book";

import BNavbar from "./BNavbar";
import Menu from "./Sidebar/Menu";
import axios from "axios";
class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    console.log("component did Mount");
    const res = await axios.get("http://127.0.0.1:8000/book/");

    this.setState({
      books: res.data,
    });
    console.log(res.data[0]);
  }

  render() {
    console.log("Render");
    const { books } = this.state;
    return (
      <React.Fragment>
        <BNavbar></BNavbar>

        <div
          className="row m-0 p-0 align-items-start"
          style={{ backgroundColor: "white", height: "100%" }}
        >
          <div
            className="col-xl-2 col-lg-2 col-md-2 col-sm-2 p-0 "
            style={{
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <Menu></Menu>
          </div>
          <div
            className="col-xl-10  col-lg-10 col-md-10 col-sm-10 p-0"
            style={{ backgroundColor: "white", marginTop: 0, height: "100%" }}
          >
            <div
              className="row"
              style={{ backgroundColor: "white", height: "100%" }}
            >
              {books.map((b) => (
                <Book key={b.bookId} book={b}></Book>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Books;

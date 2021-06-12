import React, { Component } from "react";

import BNavbar from "./BNavbar";
import Menu from "./Sidebar/Menu";
class Uploadbook extends Component {
  state = {
    bookName: "",
    category: "",
    publicBook: false,
  };

  onchange = (e) => {
    console.log([e.target.name] + " " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickCheck = (e) => {
    if (e.target.checked) {
      this.setState({
        publicBook: true,
      });
      console.log("True");
      return;
    }
    this.setState({
      publicBook: false,
    });
    console.log("False");
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");

    this.props.history.push("/Playvideo");
  };

  render() {
    const { bookName, category } = this.state;
    const categories = [
      { id: 1, label: "Drama" },
      { id: 2, label: "Fairy Tale" },
      { id: 3, label: "Fiction" },
      { id: 4, label: "Fantasy" },
      { id: 5, label: "Folklore" },
      { id: 6, label: "Tall Tale" },
    ];

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
            <div className="m-5 container">
              <form onSubmit={this.onSubmit}>
                <div className="custom-file">
                  <label> Upload Image: </label>
                  <input
                    type="file"
                    name="file"
                    className="form-control form-control-lg"
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="bookName"> Book Name: </label>
                  <input
                    type="text"
                    name="bookName"
                    className="form-control form-control-lg"
                    placeholder="Enter name.."
                    value={bookName}
                    onChange={this.onchange}
                  />
                </div>

                <div className="checkbox">
                  <label htmlFor="category">
                    Category: &nbsp;
                    <select
                      name="category"
                      value={category}
                      onChange={this.onchange}
                    >
                      <option value=""></option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="checkbox">
                  <label htmlFor="publicBook">
                    <input
                      id="publicBook"
                      type="checkbox"
                      name="publicBook"
                      onChange={this.clickCheck}
                    />
                    &nbsp; Do you want to make it public
                  </label>
                </div>

                <input
                  type="submit"
                  value="Add Book"
                  className="btn btn-light btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Uploadbook;

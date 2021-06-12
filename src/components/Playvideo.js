import React, { Component } from "react";
import ReactPlayer from "react-player";
import BNavbar from "./BNavbar";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Modal, Button } from "react-bootstrap";

import axios from "axios";

class Playvideo extends Component {
  state = {
    book: {},
    ratingPopup: false,
  };
  rateBook = () => {
    this.setState({
      ratingPopup: !this.state.ratingPopup,
    });
  };

  async componentDidMount() {
    const { id } = this.props.location.properties;
    console.log(id);
    console.log("component did Mount");
    const res = await axios.get(`http://127.0.0.1:8000/book/${id}`);

    this.setState({
      book: res.data,
    });
    console.log(res.data);
  }

  render() {
    const { ratingPopup } = this.state;
    const { videoPath } = this.state.book;
    console.log("Render");
    return (
      <React.Fragment>
        <BNavbar></BNavbar>
        <div
          width="100%"
          style={{
            backgroundImage: `url(images/pexels-francesco-ungaro-1670977.jpg)`,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          &nbsp;
          <ReactPlayer
            className="mt-3"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            controls
            width="70%"
            height="50%"
            url={videoPath}
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={this.rateBook}
            onError={() => console.log("onError callback")}
          ></ReactPlayer>
        </div>
        <div
          style={{
            width: "100%",
            height: "100px",
            color: "white",
            backgroundColor: "dimgrey",
          }}
        >
          <br />
          <h4 style={{ marginLeft: "10%", marginRight: "10%" }}>
            Watch <br /> next
          </h4>
        </div>
        <Modal show={ratingPopup}>
          <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Box component="fieldset" mb={1} borderColor="transparent">
              <Typography
                style={{ marginLeft: "auto", marginRight: "auto" }}
                component="legend"
              >
                Rate your book
              </Typography>
              <Rating
                style={{ marginLeft: "auto", marginRight: "auto" }}
                name="customized-5"
                defaultValue={3}
                max={5}
                size="large"
              />
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.rateBook}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Playvideo;

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "logo.svg";
import BNavbar from '../Navbar/BNavbar';

import {
  Form,
  Button
} from 'reactstrap';
export default class Search extends Component {
 
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    document.body.classList.add("white-content");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
   
    return (
      <React.Fragment>
      <BNavbar />
      <div>
        <Form inline>
            <input type="text" placeholder="Search" className="mr-sm-2" onChange={this.changeSearchText} value={this.state.searchtext} onClick={this.findBooks}/>
            <Button variant="outline-primary">Search</Button>
         </Form>
      </div>
      </React.Fragment>
    );
  }
}


import React from "react";
import "./menu.css";
import "../../App.css";
import { Menudata } from "./Menudata";

function Menu() {
  return (
    <React.Fragment>
      <div className="Menu">
        <ul className="MenuList">
          {Menudata.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Menu;

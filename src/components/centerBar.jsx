import React, { Component } from "react";

class CenterBar extends Component {
  state = {};
  render() {
    return (
      <div className="border">
        <ul class="list-inline btn-zoom">
          <li class="list-inline-item">
            <a src="#" className="btn btn-sm">
              --
            </a>
          </li>
          <li class="list-inline-item">
            <a src="#" className="btn btn-sm">
              +
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CenterBar;

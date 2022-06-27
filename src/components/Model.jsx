import React from "react";

export default class Model extends React.Component {
  render() {
    return (
      <div id="model">
        <div style={{ width: "250px" }} className="inner">
          <img
            className="mx-auto"
            style={{ width: "250px" }}
            src={this.props.img}
            alt=""
          />
          <img className="glass " src={this.props.glass} />
          <div
            style={{ opacity: this.props.glass == "" ? "0" : "1" }}
            className="desc text-left"
          >
            <h6>{this.props.name}</h6>
            <small>{this.props.desc}</small>
          </div>
        </div>
      </div>
    );
  }
}

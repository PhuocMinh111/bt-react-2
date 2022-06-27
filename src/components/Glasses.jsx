import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/dataGlasses.json";
export default class Glasses extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div id="glasses" className="row">
          {data.map((item) => {
            const { id, price, url, name, desc } = item;
            return (
              <div key={id} className="col-lg-3 mb-3 col-md-6">
                <img
                  src={url}
                  onClick={() => this.props.changeGlass(url, name, desc)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/dataGlasses.json";
export default class Glasses extends React.Component {
  render() {
    console.log(data);

    return (
      <div className="container">
        <div className="row">
          {data.map((item) => {
            const { id, price, url } = item;
            return (
              <div className="col-lg-3 col-md-6">
                <img src={url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

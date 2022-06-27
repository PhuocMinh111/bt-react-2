import React from "react";
import Model from "./Model";
import Glasses from "./Glasses";
export default class Layout extends React.Component {
  state = {
    glass: "",
    name: "",
    desc: ""
  };
  changeGlass = (glass, name, desc) => {
    this.setState({
      glass: glass,
      name: name,
      desc: desc
    });
    console.log(this.state.glass);
  };
  render() {
    return (
      <>
        <div className="container mb-3">
          <div className="row">
            <div className="col-lg-6 p-5">
              <Model
                glass={this.state.glass}
                name={this.state.name}
                desc={this.state.desc}
                img="./glassesImage/model.jpg"
              />
            </div>
            <div className="col-lg-6 p-5">
              <Model glass={this.state.glass} img="./glassesImage/model.jpg" />
            </div>
          </div>
          <Glasses changeGlass={this.changeGlass} />
        </div>
      </>
    );
  }
}

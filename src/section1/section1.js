import React from "react";
import "./../App.css";
import BrassPipesComponent from "./components/brasspipes";
import CopperPipesComponent from "./components/copperpipes";
import CopperAnodesComponent from "./components/copperanodes";

class Section1 extends React.Component {
  componentDidMount() {
    document.title = "Siddhivinayak Group of Companies";
  }
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  onrightclick = () => {
    let i = this.state.index;
    i++;
    i %= 3;
    this.setState({ index: i });
  };

  onleftclick = () => {
    let i = this.state.index;
    if (this.state.index > 0) {
      i--;
      this.setState({ index: i });
    } else {
      this.setState({ index: 2 });
    }
  };
  componentDidMount() {
    this.loop = setInterval(this.onrightclick, 20000);
  }
  pipes = (<CopperPipesComponent></CopperPipesComponent>);
  render() {
    if (this.state.index === 1) {
      this.pipes = <BrassPipesComponent></BrassPipesComponent>;
    } else if (this.state.index === 0) {
      this.pipes = <CopperPipesComponent></CopperPipesComponent>;
    } else {
      this.pipes = <CopperAnodesComponent></CopperAnodesComponent>;
    }
    return (
      <div className="section1-bg">
        <div className="section1-half"></div>
        <div className="s1-rl-btn">
          <button onClick={this.onleftclick} className="s1-left-btn">
            <ion-icon name="caret-back-circle"></ion-icon>
          </button>
          <button onClick={this.onrightclick} className="s1-right-btn">
            <ion-icon name="caret-forward-circle"></ion-icon>
          </button>
        </div>
        {this.pipes}
      </div>
    );
  }
}

export default Section1;

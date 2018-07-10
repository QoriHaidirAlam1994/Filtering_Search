import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Galery extends Component {
  state = {
    persons: []
  };

  componentWillMount() {
    const self = this;
    axios.get(`https://dog.ceo/api/breed/boxer/images`).then(res => {
      self.setState({ persons: res.data.message });
    });
  }

  render() {
    return <div>

        <div className="view-school">
          <div className="col-xs-10 col-sm-6 col-md-4 col-lg-8 col-xs-offset-1 col-sm-offset-2 col-md-offset-2">
            {this.state.persons.map((person) => {
              return <img src={person} className="img-box" height="300" width="300" alt="images"/>;
            })}
          </div>
        </div>

      </div>;
  }
}

export default Galery;

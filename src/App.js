import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import Galery from './galery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Video 1",
          url: "https://mystorage/video1.jpeg"
        },
        {
          title: "Video 2",
          url: "https://mystorage/video2.jpeg"
        },
        {
          title: "Video 3",
          url: "https://mystorage/video3.jpeg"
        }
      ],
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    let filteredSearch = this.state.data.filter(items => {
      return items.title.indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <div className="view-school">
          <div className="view-directory course-directory signed-in-directory">
            <div className="container">
              <div className="row search">
                <div className="col-lg-12 col-md-12 col-xs-12 pull-right">
                  <form>
                    <div className="input-group">
                      <label for="search" className="sr-only">
                        Search
                      </label>
                      <input
                        className="form-control search input-lg"
                        id="search"
                        type="search"
                        placeholder="Search"
                        onChange={this.updateSearch.bind(this)}
                      />
                      <span className="input-group-btn">
                        <label for="search-button" className="sr-only">
                          Search
                        </label>
                        <button
                          id="search-button"
                          className="btn search btn-default btn-lg"
                          type="submit"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="container">
              <table className="table table-bordered table-hover text-center">
                <thead>
                  <tr>
                    <th className="th-center">No.</th>
                    <th className="th-center">Video</th>
                    <th className="th-center">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSearch.map((items, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{items.title}</td>
                        <td>{items.url}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="">
        <div
          className="navbar navbar-fedora navbar-fixed-top "
          id="navbar"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                data-target=".navbar-header-collapse"
                data-toggle="collapse"
                type="button"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a
                className="navbar-brand header-logo"
                href="http://dumbways.id?sa=eyJ1c2VyX2lkIjoxMTY4MjYwMCwiZXhwaXJlc19hdCI6MTUzMDcwMDQ4My43OTk3OTQsInNjaG9vbF9pZCI6MTQ3MzY0LCJhdXRoZW50aWNhdGlvbl90b2tlbiI6Ilk0Qno4SEIya3h1UHdwd1JSWW9FNTMzQTFEUDU5VHY2WmcifQ%3D%3D--b2afcb0b6e094e034fe12a56602790ae7804ed5a"
              >
                <span className="sr-only">qorihaidiralam</span>
                <img
                  src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"
                  alt="DumbWays.id - Screencast Pemrograman dengan Teknologi Terkini"
                  srcset="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8 2x"
                />
              </a>
              <div className="collapse navbar-collapse navbar-header-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a
                      className="navbar-link fedora-navbar-link"
                      data-no-turbolink="true"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="fedora-navbar-link navbar-link"
                      href="\galery"
                      target=""
                    >
                      Galery
                    </a>
                  </li>

                  <li className="dropdown">
                    <a
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="fedora-navbar-link navbar-link dropdown-toggle open-my-profile-dropdown"
                      data-toggle="dropdown"
                    >
                      <img
                        className="gravatar"
                        src="https://s.gravatar.com/avatar/51a80c53f3a4d048466d0708063b6cd6?d=mm"
                        alt="qorihaidiralam@gmail.com"
                      />
                      <span className="navbar-current-user">
                        Qori Haidir Alam
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

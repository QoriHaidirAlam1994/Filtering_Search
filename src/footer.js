import React, { Component } from "react";
import "./App.css";

class Footer extends Component {
  render() {
    return (
      <footer class="bottom-menu bottom-menu-inverse">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 footer-column">
              <p>
                &copy; DumbWays.id - Screencast Pemrograman dengan Teknologi
                Terkini
              </p>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 footer-column">
              <ul class="list-unstyled">
                <li>
                  <a href="/p/terms">Terms of Use</a>
                </li>
                <li>
                  <a href="/p/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 footer-column">
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/ega.sdr/?fref=ts">
                    Ega Software Development Review
                  </a>
                </li>
                <li>
                  <a href="https://www.idrails.com/">IDRails</a>
                </li>
                <li>
                  <a href="http://kawankoding.com/">Kawan Koding</a>
                </li>
                <li>
                  <a
                    class="powered-by"
                    href="https://teachable.com/?src=school_footer"
                    style={{ visibility: "visible !important;" }}
                  >
                    Powered by
                    <img
                      src="https://d2oz8i5n9se8ej.cloudfront.net/assets/footer/teachable-logo-white-efd32576079839534d5b6e87bf4424e99b12624f854b2c500a4d3f0b6e2af46b.svg"
                      class="powered-by-logo"
                      alt="Teachable"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

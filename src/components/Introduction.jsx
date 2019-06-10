import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <section
              id="colorlib-hero"
              className="js-fullheight"
              data-section="home"
            >
              <div className="flexslider js-fullheight">
                <ul className="slides">
                  <li style={{ backgroundImage: "url(images/undraw-web-developer-flipped.jpg)" }}>
                    <div className="overlay" />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                          <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                              <h1>
                                Hi! <br />
                                I'm Ken
                              </h1>
                              <h2>
                                A full-stack web developer residing in the
                                Philippines.
                              </h2>
                              <p>
                                <a
                                  href="https://drive.google.com/open?id=1or5ErwaPinT-0jQ7BupfvcIKpZBcIwjz"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="btn btn-primary btn-learn"
                                >
                                  View CV
                                  <i className="icon-download4" />
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
        );
    }
}

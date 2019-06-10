import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <section className="colorlib-experience" data-section="education">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading animate-box">Education</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="timeline-centered">
                      <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-1">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            {/* eslint-disable-next-line */}
                            <h2><a href="#">Bachelor of Science in Information Technology (<i>Magna Cum Laude</i>)</a> <span>University of the East - Manila (2014 - 2018)</span></h2>
                            <ul>
                                <li>Led a software development team for a Web-Based Hotel
                                Reservation and Billing System for D. Midland Pacific Hotel</li>
                                <li>Passed the 2017 Programming Skills Evaluation facilitated by
                                the UE College of Computer Studies and Systems (CCSS).</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-none">
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}

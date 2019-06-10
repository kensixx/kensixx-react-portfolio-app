import React, { Component } from 'react'

export default class WorkExperience extends Component {
    render() {
        return (
            <section className="colorlib-experience" data-section="workExperience">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Experience</span>
                    <h2 className="colorlib-heading animate-box">Work Experience</h2>
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
                            <h2><a href="#">Jr. Software Developer at Codegum, Inc.</a> <span>Dec 2018 - Present</span></h2>
                            <ul>
                              <li>Maintaining a Spring Boot-powered microservice that uses AWS S3 to store and manage files in the system.</li>
                              <li>
                                Created a MEAN full stack system to gather and generate reports of Pa-iwi Online (Pa-iwi Reports) 
                                <a href="http://report.paiwionline.com" target="_blank" rel="noopener noreferrer">(report.paiwionline.com)</a>
                              </li>
                              <li>
                                Maintaining a codebase for a major system created by the
                                company; an investment and livestock tracker - Pa-iwi Online
                                <a href="https://www.paiwionline.com" target="_blank" rel="noopener noreferrer">(www.paiwionline.com)</a>
                              </li>
                              <li>
                                Created a prototype Human Resource Information System for
                                the company to manage and track the employees' personal
                                and office information and leave tracking.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-2">
                            <i className="icon-pen2" />
                          </div>
                          <div className="timeline-label">
                            {/* eslint-disable-next-line */}
                            <h2><a href="#">Java Developer at goFLUENT Philippines, Inc.</a> <span>May 2018 - Oct 2018</span></h2>
                            <ul>
                              <li>Reinforced the current system’s password policy at the
                                customized organizational level (using Java as back-end)</li>
                              <li>Overhauled the current video streaming systems of the
                                current system from Flash to HTML5 Player using Wowza as
                                its streaming engine / service</li>
                              <li>Handled tasks with regards to maintaining the reliability of
                                the current system</li>
                              <li>Proficiency in using Liferay Portal CMS for both front and
                                back-end (JSPs and Liferay’s Java files)</li>
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
        );
    }
}

import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft"
                        >
                            <span className="heading-meta">Skills</span>
                            <h2 className="colorlib-heading animate-box">The technologies I wield for work</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <span className="skills-title-heading">MEAN Stack</span>
                            
                            <img className="mr-3" src="https://img.icons8.com/color/48/000000/mongodb.png" data-toggle="tooltip" title="MongoDB" />
                            <img className="mr-3" src="images/ExpressJS.png" data-toggle="tooltip" title="Express.js"/>
                            <img className="mr-3" src="https://img.icons8.com/color/48/000000/angularjs.png" data-toggle="tooltip" title="AngularJS"/>
                            <img className="mr-3" src="https://img.icons8.com/color/48/000000/nodejs.png" data-toggle="tooltip" title="Node.js"></img>
                        </div>

                        <div className="col-md-12 animate-box">
                            <hr />
                        </div>

                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <span className="skills-title-heading">Supplementary Tech Stacks</span>

                            <img className="mr-1" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" data-toggle="tooltip" title="Core Java" />
                            <img className="mr-3" src="https://img.icons8.com/color/48/000000/spring-logo.png" data-toggle="tooltip" title="Spring Boot" />
                            <img className="mr-3" src="https://img.icons8.com/color/48/000000/amazon-web-services.png" data-toggle="tooltip" title="Amazon Web Services" />
                            <img className="mr-1" src="https://img.icons8.com/color/48/000000/javascript.png" data-toggle="tooltip" title="Core JavaScript" />
                            <img className="mr-3 react-app-logo" src="images/react-logo.svg" data-toggle="tooltip" title="React" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

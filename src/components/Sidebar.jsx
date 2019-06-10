import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#/" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/author-ken-flake-compressed.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Ken Flake</a></h1>
                            <span className="position"><a href="#/">Full Stack Developer</a></span>

                            <div className="social-contact">
                                <ul>
                                    <li><a href="https://www.facebook.com/kensixx04" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                                    <li><a href="https://www.twitter.com/kensixx" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                                    <li><a href="https://www.instagram.com/kensixx" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/ken-flake/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                    <li><a href="mailto:ken.flake.webdev@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail5" /></a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                                    {/* <li className="active"><a href="#" data-nav-section="about">About</a></li> */}
                                    <li><a href="#" data-nav-section="services">Services</a></li>
                                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#" data-nav-section="workExperience">Work Experience</a></li>
                                    <li><a href="#/" data-nav-section="education">Education</a></li>
                                    {/* <li><a href="#/" data-nav-section="contact">Contact</a></li> */}
                                </ul>
                            </div>
                        </nav>
                        <div className="colorlib-footer">
                            <p>
                                <small>
                                    © {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  
                                    <span>
                                        Demo Images: <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash.com </a> 
                                         & <a href="https://undraw.io/" target="_blank" rel="noopener noreferrer">Undraw.io</a>  
                                    </span>
                                </small>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

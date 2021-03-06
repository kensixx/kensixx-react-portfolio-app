import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section class="colorlib-services" data-section="services">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <span class="heading-meta">What I do?</span>
                            <h2 class="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div class="row row-pt-md">
                        <div class="col-md-4 offset-md-2 text-center animate-box">
                            <div class="services color-2">
                                <span class="icon">
                                    <i class="icon-layers2"></i>
                                </span>
                                <div class="desc">
                                    <h3>Web Development</h3>
                                    <p>Specializing in <b>Spring Boot</b> and the <b>MEAN Stack</b>. React in progress! <em>Hint: I practiced using React in this portfolio!</em></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center animate-box">
                            <div class="services color-3">
                                <span class="icon">
                                    <i class="icon-cloud3"></i>
                                </span>
                                <div class="desc">
                                    <h3>DevOps</h3>
                                    <p>Currently pursuing my goal on learning the cloud and to be a Certified AWS Developer - Associate! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

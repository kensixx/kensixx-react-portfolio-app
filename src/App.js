import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Introduction from './components/Introduction';
import Services from './components/Services';
import Skills from './components/Skills';
// import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

class App extends Component {
	render() {
		return (
			<div id="colorlib-page">
				<div className="container-wrap">
					<Sidebar />

					<div id="colorlib-main">
						<Introduction />
						<Services />
						<Skills />
						<WorkExperience />
						<Education />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

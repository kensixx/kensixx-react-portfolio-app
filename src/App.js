import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Introduction from './components/Introduction';
import Skills from './components/Skills';
// import About from './components/About';
import WorkExperience from './components/WorkExperience';

class App extends Component {
	render() {
		return (
			<div id="colorlib-page">
				<div className="container-wrap">
					<Sidebar />

					<div id="colorlib-main">
						<Introduction />
						<Skills />
						<WorkExperience />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

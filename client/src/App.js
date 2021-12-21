import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Pages/Main";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Main />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

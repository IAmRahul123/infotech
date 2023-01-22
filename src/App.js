/** @format */

import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
	BrowserRouter as Router,
} from "react-router-dom";
import Homepage2 from "./pages/Homepage2";
import { useEffect } from "react";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (action !== "POP") {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	useEffect(() => {
		let title = "";
		let metaDescription = "";

		switch (pathname) {
			case "/":
				title = "";
				metaDescription = "";
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<>
			{/* <Navbar />
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes> */}

			<Navbar />
			<GetInTouch />
			<Footer />
		</>
	);
}
export default App;

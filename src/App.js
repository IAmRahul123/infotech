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
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

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
			<Hero />
			<About />
			<Carousel />

			<GetInTouch />
			<Footer />
		</>
	);
}
export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import Create from "./pages/Create";
import Teams from "./pages/Teams";
import ViewProduct from "./pages/ViewProduct";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/create" element={<Create />} />
					<Route path="/teams" element={<Teams />} />
					<Route path="/viewproduct" element={<ViewProduct />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

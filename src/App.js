import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import Info from "./components/Info/info";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Info />
			<Footer />
		</div>
	);
}

export default App;

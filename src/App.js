import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Footer from './components/Footer/footer';
import Info from './components/Info/info';
import About from './components/About/About';
import Gallery from './components/Gallery/gallery';
function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Gallery />
			<Info />
			<Footer />
		</div>
	);
}

export default App;

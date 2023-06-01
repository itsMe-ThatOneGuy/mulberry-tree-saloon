import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import Info from "./components/Info/info";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Menu />
            <Info />
            <Footer />
        </div>
    );
}

export default App;

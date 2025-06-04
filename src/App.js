import Layout from './components/Layout/layout';
import Menu from './components/Menu/menu';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
	return (
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/menu"
					element={
						<Layout>
							<Menu />
							<ScrollToTopBtn />
						</Layout>
					}
				/>
			</Routes>
	);
}

export default App;

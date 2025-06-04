import Layout from './components/Layout/layout';
import Menu from './pages/Menu';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './components/NotFound/notfound';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
	useEffect(() => {
		if (window.location.hash) {
			window.history.replaceState(null, '', window.location.pathname);
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route
					path="/*"
					element={
						<Layout>
							<NotFound />
						</Layout>
					}
				/>
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
						</Layout>
					}
				/>
			</Routes>
		</>
	);
}

export default App;

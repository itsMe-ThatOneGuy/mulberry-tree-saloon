import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/menu' || location.pathname === '/') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location.key, location.pathname]);

	return null;
};

export default ScrollToTop;

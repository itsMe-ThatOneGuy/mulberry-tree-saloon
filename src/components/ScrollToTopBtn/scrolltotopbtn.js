import { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';
import { motion } from 'framer-motion';

const ScrollToTopBtn = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<motion.button
			initial={{ opacity: 0, y: 50 }}
			animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.3 }}
			onClick={scrollToTop}
			className="fixed bottom-6 right-6 z-50 p-3 bg-[#47A025] text-white rounded-full shadow-lg hover:bg-[#58b836] transition-all"
			aria-label="Scroll to top"
		>
			<ArrowUp />
		</motion.button>
	);
};

export default ScrollToTopBtn;

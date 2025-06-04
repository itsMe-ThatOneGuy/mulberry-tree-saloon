import Header from '../Header/header';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;

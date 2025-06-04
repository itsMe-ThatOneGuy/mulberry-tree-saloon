import noise from '../../images/noise.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section
			className="min-h-screen flex items-center justify-center bg-[#1E1E1E] bg-blend-overlay bg-opacity-90"
			style={{ backgroundImage: `url("${noise}")` }}
		>
			<div className="text-center px-6">
				<h1 className="text-9xl font-liquidism2 text-[#E71D36] drop-shadow mb-6">
					404
				</h1>
				<h2 className="text-5xl text-[#F0F7EE] tracking-widest drop-shadow mb-8">
					Body Not Found
				</h2>

				<Link to="/">
					<button className="px-6 py-3 rounded-full bg-[#47A025] text-white font-semibold hover:bg-[#5bc030] transition-all animate-wigglePulse">
						Return to The Living
					</button>
				</Link>
			</div>
		</section>
	);
};

export default NotFound;

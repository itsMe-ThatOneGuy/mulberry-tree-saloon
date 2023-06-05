import { MapPin, Mail, Clock, Phone, Facebook } from 'react-feather';

const Info = () => {
	return (
		<section id="info" className="relative scroll-m-12">
			<div className="my-5">
				<div className="bg-[#222] flex flex-col items-center py-3">
					<h2 className="pb-10 mt-7 font-medium text-green-500 text-2xl text-center uppercase tracking-widest lg:text-5xl">
						- Information -
					</h2>
					<div className="w-full md:grid grid-cols-2 text-white md:px-56 md:text-lg">
						<div className="flex flex-col items-center md:justify-center">
							{/* Google maps image*/}
							<div className="w-2/3">
								<iframe
									className="w-full h-72 md:h-[30rem]"
									title="test"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>

						<div className="md:flex justify-center md:w-full">
							{/* contact info */}
							<div className="py-7 font-semibold text-lg md:text-xl">
								<div className="flex flex-col items-center py-3">
									<div className="flex pb-3">
										<MapPin className="text-green-500" size={20} />
										<p className="pl-2">Location :</p>
									</div>
									<div>
										<p>
											610 State Hwy 265
											<br />
											Marionville, MO 65705
										</p>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex pb-3">
										<Phone className="text-green-500" size={20} />
										<p className="pl-2">Phone :</p>
									</div>
									<div>
										<p>(417) 366-9857</p>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex pb-3">
										<Mail className="text-green-500" size={20} />
										<p className="pl-2">Email :</p>
									</div>
									<div>
										<p>MulberryMail@yahoo.com</p>
									</div>
								</div>

								<div className="flex flex-col items-center py-3">
									<div className="flex pb-3">
										<Clock className="text-green-500" size={20} />
										<p className="pl-2">Hours of Operation :</p>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<p className="text-green-500">Sun</p>
										</div>
										<div>
											<p>12:00 PM - 8:00 PM</p>
										</div>
										<div>
											<p>Mon</p>
										</div>
										<div>
											<p>Closed</p>
										</div>
										<div>
											<p>Tues</p>
										</div>
										<div>
											<p>4:00 PM - 12:00 AM</p>
										</div>
										<div>
											<p>Wed</p>
										</div>
										<div>
											<p>4:00 PM - 12:00 AM</p>
										</div>
										<div>
											<p>Thurs</p>
										</div>
										<div>
											<p>4:00 PM - 12:00 AM</p>
										</div>
										<div>
											<p>Fri</p>
										</div>
										<div>
											<p>4:00 PM - 12:00 AM</p>
										</div>
										<div>
											<p className="text-green-500">Sat</p>
										</div>
										<dvi>
											<p>4:00 PM - 12:00 AM</p>
										</dvi>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-white text-center font-medium text-xl py-3 md:text-2xl">
						<p>Visit our Facebook page for all upcoming Events!</p>
					</div>
					<div className="pb-3">
						<a
							href="https://www.facebook.com/profile.php?id=100057060955346"
							target="_blank"
							rel="noreferrer"
						>
							<button className="text-white hover:bg-blue-500 ease-in-out duration-75 rounded-3xl p-3">
								<Facebook size={50} />
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;

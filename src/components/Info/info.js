import { MapPin, Mail, Clock, Phone, Facebook } from "react-feather";

const Info = () => {
	return (
		<section id="info">
			<div className="w-full md:h-screen">
				<div className="bg-[#222] py-4 md:py-0">
					<h2>Information</h2>

					<div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-h mx-auto px-4 text-white">
						{/* Google maps image*/}
						<div className="flex justify-center items-center">
							<iframe
								title="test"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
								width="544"
								height="492"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								className="mr-4 drop-shadow-md"></iframe>
						</div>

						{/* contact info */}
						<div className="w-full grid grid-cols-2 gap-2">
							<div className="flex self-start items-center">
								<MapPin
									style={{ color: "#fe4039" }}
									size={20}
									className="mr-3"
								/>
								<p className="font-medium uppercase">
									Location :
								</p>
							</div>
							<div>
								<p>
									610 State Hwy 265
									<br />
									Marionville, MO 65705
								</p>
							</div>

							<div className="flex self-start items-center">
								<Phone
									style={{ color: "#fe4039" }}
									size={20}
									className="mr-3"
								/>
								<p className="font-medium uppercase">Phone :</p>
							</div>
							<div>
								<p>(417) 366-9857</p>
							</div>

							<div className="flex self-start items-center">
								<Mail
									style={{ color: "#fe4039" }}
									size={20}
									className="mr-3"
								/>
								<p className="font-medium uppercase">Email :</p>
							</div>
							<div>
								<p>MulberryMail@yahoo.com</p>
							</div>

							<div className="flex self-start items-center">
								<Clock
									style={{ color: "#fe4039" }}
									size={20}
									className="mr-3"
								/>
								<p className="font-medium uppercase">
									Hours of Operation :
								</p>
							</div>
							<div></div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Sun</p>
							</div>
							<div className="flex items-center">
								<p>12:00 PM - 8:00 PM</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Mon</p>
							</div>
							<div className="flex items-center">
								<p className="upper">Closed</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Tues</p>
							</div>
							<div className="flex items-center">
								<p>4:00 PM - 12:00 AM</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Wed</p>
							</div>
							<div className="flex items-center">
								<p>4:00 PM - 12:00 AM</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Thurs</p>
							</div>
							<div className="flex items-center">
								<p>4:00 PM - 12:00 AM</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Fri</p>
							</div>
							<div className="flex items-center">
								<p>4:00 PM - 12:00 AM</p>
							</div>
							<div className="flex justify-end items-center pr-4">
								<p className="font-medium uppercase">Sat</p>
							</div>
							<div className="flex items-center">
								<p>4:00 PM - 12:00 AM</p>
							</div>
						</div>

						<div>
							<p>
								Visit our Facebook page for all upcoming Events!
							</p>
						</div>
						<div>
							<a
								href="https://www.facebook.com/profile.php?id=100057060955346"
								target="_blank"
								rel="noreferrer">
								<button>
									<Facebook />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;

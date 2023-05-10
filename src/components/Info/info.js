import { MapPin, Mail, Clock, Phone, Facebook } from "react-feather";

const Info = () => {
	return (
		<section id="info">
			<div>
				<h2>Information</h2>
			</div>

			<div>
				{/* Google maps image*/}
				<div>
					<iframe
						title="test"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6373.141844684716!2d-93.63045578181291!3d36.99617396565907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4eda7f665649%3A0xbeb42b2f2611bf8e!2s610%20State%20Hwy%20265%2C%20Marionville%2C%20MO%2065705!5e0!3m2!1sen!2sus!4v1683601716692!5m2!1sen!2sus"
						width="600"
						height="450"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>

				{/* contact info */}
				<div>
					<div>
						<MapPin />
						<p>Location :</p>
					</div>
					<div>
						<p>
							610 State Hwy 265
							<br />
							Marionville, MO 65705
						</p>
					</div>

					<div>
						<Phone />
						<p>Phone :</p>
					</div>
					<div>
						<p>(417) 366-9857</p>
					</div>

					<div>
						<Mail />
						<p>Email :</p>
					</div>
					<div>
						<p>MulberryMail@yahoo.com</p>
					</div>

					<div>
						<Clock />
						<p>Hours of Operation :</p>
					</div>
					<div>
						<p>Sun</p>
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
						<p>Sat</p>
					</div>
					<div>
						<p>4:00 PM - 12:00 AM</p>
					</div>
				</div>

				<div>
					<p>Visit our Facebook page for all upcoming Events!</p>
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
		</section>
	);
};

export default Info;

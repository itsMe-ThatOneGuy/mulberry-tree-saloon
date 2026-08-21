export const business = {
	name: 'The Mulberry Tree Saloon',
	description:
		'The Mulberry Tree Saloon is a zombie-themed bar, restaurant, and live music venue offering great food, drinks, and live entertainment.',
	address: {
		streetAddress: '610 State Hwy 265',
		addressLocality: 'Marionville',
		addressRegion: 'MO',
		postalCode: '65705',
		addressCountry: 'US',
	},
	telephone: +14172422034,
	telephoneDisplay: '(417) 242-2034',
	email: 'mulberrymail@yahoo.com',
	facebook: 'https://www.facebook.com/p/Mulberry-Tree-Saloon-100057060955346/',
	instagram: 'https://www.instagram.com/mulberrytreesaloon/',
	menu: 'https://qrfy.io/p/sbtoepjwpc?utm_source=qrcode&utm_medium=images&utm_campaign=35903903',

	mulberryTreeHours: [
		{
			day: 'Sun',
			hours: '11:00 AM - 12:00 AM',
			color: '#C86368',
		},
		{
			day: 'Mon',
			hours: '11:00 AM - 12:00 Am',
		},
		{
			day: 'Tues',
			hours: '11:00 AM - 12:00 AM',
		},
		{ day: 'Wed', hours: '11:00 AM - 12:00 AM' },
		{
			day: 'Thurs',
			hours: '11:00 AM - 12:00 AM',
		},
		{ day: 'Fri', hours: '11:00 AM - 1:30 AM' },
		{
			day: 'Sat',
			hours: '11:00 AM - 1:30 AM',
			color: '#C86368',
		},
	],

	cityMorgueHours: [
		{
			day: 'Sun',
			hours: '11:00 AM - 7:00 PM',
			color: '#C86368',
		},
		{
			day: 'Mon',
			hours: '11:00 AM - 11:00 PM',
		},
		{
			day: 'Tues',
			hours: '11:00 AM - 11:00 PM',
		},
		{
			day: 'Wed',
			hours: '11:00 AM - 11:00 PM',
		},
		{
			day: 'Thurs',
			hours: '11:00 AM - 11:00 PM',
		},
		{
			day: 'Fri',
			hours: '11:00 AM - 11:00 PM',
		},
		{
			day: 'Sat',
			hours: '11:00 AM - 11:00 PM',
			color: '#C86368',
		},
	],

	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '11:00',
			closes: '00:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Monday',
			opens: '11:00',
			closes: '00:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Tuesday',
			opens: '11:00',
			closes: '00:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Wednesday',
			opens: '11:00',
			closes: '00:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Thursday',
			opens: '11:00',
			closes: '00:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Friday',
			opens: '11:00',
			closes: '01:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '11:00',
			closes: '01:30',
		},
	],
};

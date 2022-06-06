export function getHours(date, offset) {
	let shift = Number(offset)
	const myOffset = -(new Date().getTimezoneOffset() / 60);
	let hour = date.getHours() - myOffset;
	if (!isNaN(shift)) {
		 if (shift > 12) shift = 12;
		 if (shift < -12) shift = -12;
		 hour += shift;
	}

	if (hour < 0) hour = 24 + hour;
	if (hour > 24) hour -= 24;

	if (hour < 10 && hour > -1) {
		 hour = '0' + hour;
	}

	if (hour === 24) return '00';

	return hour;
}

export function getMinutes(date) {
	let minutes = date.getMinutes();

	if (minutes < 10) {
		 return '0' + minutes;
	}
	if (minutes === 60) return '00';

	return minutes;
}
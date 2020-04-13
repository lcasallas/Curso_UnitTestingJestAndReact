const cities = ['bogota', 'medellin', 'lima', 'buenos aires', 'montevideo'];

const randomString = () => {
	const string = cities[Math.floor(Math.random() * cities.length)];
	return string;
};

const reverseString2 = (str) => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('error'));
		}
		resolve(str.split('').reverse().join(''));
	});
};

module.exports = randomString;

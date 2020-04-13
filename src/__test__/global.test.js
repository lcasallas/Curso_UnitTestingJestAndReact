const text = 'Hola mundo';
const frutas = ['banano', 'melon', 'pina'];

test('Debe contener un texto', () => {
	expect(text).toMatch(/mundo/);
});

test('Tenemos un banano?', () => {
	expect(frutas).toContain('banano');
});

test('Mayor que', () => {
	expect(10).toBeGreaterThan(8);
});

test('prueba boolean', () => {
	expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''));
};

test('probando callback', () => {
	reverseString('Hola', (str) => {
		expect(str).toBe('aloH');
	});
});

const reverseString2 = (str) => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('error'));
		}
		resolve(str.split('').reverse().join(''));
	});
};

test('probar una promesa', () => {
	return reverseString2('Hola').then((string) => {
		expect(string).toBe('aloH');
	});
});

test('probar una async await', async () => {
	const string = await reverseString2('Hola');

	expect(string).toBe('aloH');
});

// //Codigo que se ejecuta despues de cada prueba
// afterEach(() => console.log('despues de cada prueba'));
// //Codigo que se ejecuta despues de todas pruebas
// afterAll(() => console.log('despues de todas las pruebas'));
// //Codigo que se ejecuta antes de cada prueba
// beforeEach(() => console.log('Antes de cada prueba'));
// //Codigo que se ejecuta antes de todas pruebas
// beforeAll(() => console.log('Antes de todas las pruebas'));

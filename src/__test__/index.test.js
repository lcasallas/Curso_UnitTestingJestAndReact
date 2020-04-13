const randomStrings = require('../index');

//Me permite describir una serie de pruebas.
describe('Probar funcionalidades de randomString', () => {
	test('Probar la funcionalidad', () => {
		expect(typeof randomStrings()).toBe('string');
	});

	test('Comprobar que no existe una ciudad', () => {
		expect(randomStrings()).not.toMatch(/Cordoba/);
	});
});

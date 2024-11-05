const isValid = require('./passwordValidator.js')

const longPassword = "mysecretpw";
const shortNumbered = "as1";
const longNumbered = "cenjc123jnj";
const numbers = "123456789"

test('password should be at least 8 characters long', () => {
    expect(isValid(longNumbered)).toBe(true); // Vérifie que le mot de passe a au moins 8 caractères
    expect(isValid(shortNumbered)).toBe(false);
});

test('At least 1 figure in the password', () => {
    expect(isValid(longNumbered)).toBe(true);
    expect(isValid(longPassword)).toBe(false);
});

test('At least 1 letter in the password', () => {
    expect(isValid(longNumbered)).toBe(true);
    expect(isValid(numbers)).toBe(false);
});
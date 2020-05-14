const Pet = require('../src/pet');

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});
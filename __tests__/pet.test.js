const Pet = require('../src/pet');

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Ursula');

        expect(pet.name).toEqual('Ursula');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Ursula');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Ursula');

        pet.growUp();
    
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});

describe('swim', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Ursula');

        pet.fitness = 4;
        pet.swim();

        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Ursula');
        pet.fitness = 8;
        pet.swim();

        expect(pet.fitness).toEqual(10);
    });
});
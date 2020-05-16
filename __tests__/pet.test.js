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

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Ursula');

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Ursula');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});

describe('checkup', () => {
    it('returns a string when fitness is less than 3 and hunger is equal to or greater than 5', () => {
        const pet = new Pet('Ursula');

        pet.fitness = 1
        pet.hunger = 7;
        pet.checkup();

        expect(pet.checkup()).toEqual("I am hungry AND I need a swim");
    });

    it('returns a string when fitness is less than 3', () => {
        const pet = new Pet('Ursula');

        pet.fitness = 1;
        pet.hunger = 1;
        pet.checkup();

        expect(pet.checkup()).toEqual("I need a swim");
    });

    it('returns a string when hunger is equal to or greater than 5', () => {
        const pet = new Pet('Ursula');

        pet.fitness = 6;
        pet.hunger = 9;
        pet.checkup();

        expect(pet.checkup()).toEqual("I am hungry");
    });

    it('returns a string when fitness is equal to or greater than 3 and hunger is less than 5', () => {
        const pet = new Pet('Ursula');

        pet.fitness = 10;
        pet.hunger = 0;
        pet.checkup();

        expect(pet.checkup()).toEqual("I feel great!");
    });
});
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
};

Pet.prototype.swim = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function() {
    if ((this.hunger - 3) <= MINIMUM_HUNGER ) {
        this.hunger = MINIMUM_HUNGER;
    } else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkup = function() {
    const basicFitness = 3;
    const starving = 5;

    if (this.fitness < basicFitness && this.hunger >= starving) {
        return "I am hungry AND I need a swim"
    } else if (this.fitness < basicFitness) {
        return "I need a swim";
    } else if (this.hunger >= starving) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
}

module.exports = Pet;
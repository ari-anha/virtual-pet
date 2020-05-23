const MAXIMUM_AGE = 30;
const MINIMUM_FITNESS = 0;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const basicFitness = 3;
const starving = 5;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    get isAlive() {
      return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }
  };

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;
};

Pet.prototype.swim = function() {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if ((this.hunger - 3) <= MINIMUM_HUNGER ) {
        this.hunger = MINIMUM_HUNGER;
    } else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkup = function() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    } else if (this.fitness < basicFitness && this.hunger >= starving) {
        return "I am hungry AND I need a swim";
    } else if (this.fitness < basicFitness) {
        return "I need a swim";
    } else if (this.hunger >= starving) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
};

module.exports = Pet;
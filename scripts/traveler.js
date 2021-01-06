// The Traveler class (blueprint) should set the following properties for each instance:

// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
// The Traveler class should also have the following methods:

class Traveler {
  constructor(name) {
    this.name = name;
    this.foodAmount = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.foodAmount += 2;
  }
  eat() {
    if (this.foodAmount === 0) {
      this.isHealthy = false;
    } else {
      this.foodAmount -= 1;
    }
  }
}
// let henrietta = new Traveler("Henrietta");
// let juan = new Traveler("Juan");
// let maude = new Traveler("Maude");
// console.log(juan);

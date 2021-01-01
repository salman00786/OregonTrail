// The Traveler class (blueprint) should set the following properties for each instance:

// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
// The Traveler class should also have the following methods:

// class Traveler {
//   constructor(name) {
//     this.food = 1;
//     this.name = name;
//     this.isHealthy = true;
//   }
//   // hunt() – Increases the traveler's food by 2.
//   hunt() {
//     this.food += 2;
//     //return this.food;
//   }
//   // eat() – Consumes 1 unit of the traveler's food.
//   //If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).

//   eat() {
//     if (this.food === 0) {
//       this.isHealthy = false;
//     } else {
//       this.food -= 1;
//     }
//   }
// }
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

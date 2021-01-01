// The Wagon class should set the following properties for each instance:

// a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
// a passengers list, which is initially an empty array.
// The Wagon class should have these methods:

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passenger = [];
  }

  // getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created,
  // subtracted by the number of passengers currently on board.

  getAvailableSeatCount() {
    let emptySeats = this.capacity - this.passenger.length;
    return emptySeats;
  }

  // join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

  join(traveler) {
    if (this.passenger.length < this.capacity) {
      this.passenger.push(traveler);
    } else {
      ("Wagon capacity is full");
    }
  }
  // shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
  shouldQuarantine() {
    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i].isHealthy === false) {
        return true;
      }
    }

    return false;
  }
  // totalFood() - Returns the total amount of food among all passengers in the wagon.
  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passenger.length; i++) {
      total += this.passenger[i].food;
    }
    return total;
  }
}

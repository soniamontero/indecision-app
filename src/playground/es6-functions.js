// To run in terminal, type: `babel src/playground/es6-functions.js --out-file=public/scripts/app.js --presets=env,react --watch`


// this keyword- no longer bound


// Example 1 - Doesn't work
// const user1 = {
//   name: 'So',
//   cities: ['Clermont', 'Canggu'],
//   getPlacesLived: function () {
//     console.log(this.name)
//     console.log(this.cities)
//     this.cities.forEach(function (city) {
//       console.log(this.name + ' lived in ' + city) // Doesn't work because `this` is not accessible.
//     })
//   }
// }

// user1.getPlacesLived();

// Example 2 - workaround with THAT
const user2 = {
  name: 'So',
  cities: ['Clermont', 'Canggu'],
  getPlacesLived: function () {
    const that = this;
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach(function (city) {
      console.log(that.name + ' lived in ' + city) // Doesn't work because `this` is not accessible.
    })
  }
}

user2.getPlacesLived();

// Example 3 - To solve in with arrow function ES6

const user3 = {
  name: 'So',
  cities: ['Clermont', 'Canggu'],
  getPlacesLived: function () { // We need to keep `function` here because an arrow would bind to the parent level, which is global, and doesn't contain anything.
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city)
    })
  }
}

user3.getPlacesLived();

// Example 4 - ES6 + refactored ES5

const user4 = {
  name: 'So',
  cities: ['Clermont', 'Canggu'],
  getPlacesLived() { // Shorter refactored example
    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city)
    })
  }
}

user4.getPlacesLived();


// Example 5 - Use of Map

const user5 = {
  name: 'So',
  cities: ['Clermont', 'Canggu'],
  getPlacesLived() { // Shorter refactored example
    const cityMessages = this.cities.map((city) => { // Or remove the const and just return in place.
      return this.name + ' lived in ' + city
    });
    return cityMessages;
  }
}

user5.getPlacesLived();


const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    const result = this.numbers.map((number) => {
      return this.multiplyBy * number
    });
    return result;
  }
}
console.log(multiplier.multiply());

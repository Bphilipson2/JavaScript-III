/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When using a global scope, the window object will become the value of "this"
* 2. Implicit binding is when an object is before the dot
* 3. New Binding is used with the constructor function
* 4. Explicit binding is used then call or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(city) {
    console.log(city);
  }
  sayName("New York");


// Principle 2

// code example for Implicit Binding
const fullName = {
    name: 'Bradley',
    sayLast: function(name) {
        console.log(`${this.name} my last name is ${name}`);
        console.log(this); 
    }
};

fullName.sayLast('Philipson');

// Principle 3

// code example for New Binding
function VideoGame(genre) {
    this.game = 'Building';
    this.genre = 'adult';
    this.rating = function() {
        console.log(this.game + this.genre);
        console.log(this);
    };
}

const skyline = new VideoGame('skyline');
const Dishonored = new VideoGame('Dishonored');

skyline.rating();
Dishonored.rating();

// Principle 4

// code example for Explicit Binding

skyline.rating.call(Dishonored); Dishonored.rating.apply(skyline);
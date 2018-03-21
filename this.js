/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is in the global scope, the this inside of the function will refer to the window object.

* 2. Whenever a function is called before a dot use this as the object.
* 3. When a constructor is used (this) is the instance of the object within that constructor like within new the this is a new object within the function.
* 4. When Javascript uses call or apply, this is defined explicitly.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function global() {
    console.log(this)
}

// Principle 2

// code example for Implicit Binding
function kitten(name) {
    this.name = poo;
}

// Principle 3

// code example for New Binding
 function poop() {
     this.name = "fecal material";
     console.log(this);
 }
 new poop();

// Principle 4

// code example for Explicit Binding

function tapap() {
    console.log(this);
}
var topop = {
    value: 20
};
tapap.call(topop);

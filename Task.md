## Task Pendings

pending exercise for the day 17 & 18.

DAY-25 both the practice and the rock paper scissor game have to implement function random choice

game are missing I have to implement all things inside the game

Q-27 what is closure in javascript.( from interview series ).


##

## for Inverview purposes.

** slice() method give new array object, it does not mutate the original array. return the subset as a new array.
** Splice method modifies the original array and returns the deleted array.
<
        Slice	                                                    Splice
Doesn't modify the original array(immutable)	    Modifies the original array(mutable)
Returns the subset of original array	            Returns the deleted elements as array
Used to pick the elements from array	            Used to insert/delete elements to/from array

>

** []==[] or []===[] both are false.
** {}=={} or {}==={} both are false.

** An arrow function is a shorter/concise syntax for a function expression and does not have its own {this, arguments, super, or new.target}.

** In Javascript, functions are first class objects.{First-class functions means when functions in that language are treated like any other variable.}
** first order function and higher order function.(A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value., A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both. )

** A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

** Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with the Immutability concept of ES6: giving preference to const over let usage.

** The Temporal Dead Zone(TDZ) is a specific period or area of a block where a variable is inaccessible until it has been intialized with a value. This behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.

** 
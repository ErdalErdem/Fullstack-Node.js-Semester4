// we will always default to using const
const myName = "Erdal";

const me = {

};
me.name = myName;
console.log(me);

// const is constant NOT in the value but in the assigment
// meaning that it cannot be reassigned and thus also HAS to be assigned 

// SyntaxError: Missing initializer in const declaration
// const test;

const hobbies = ["coding", "eating"]

hobbies.push("sleeping")

// hobbies = [];
// hobbies = "";


me.hobbies = hobbies;

// console.log(me)

// Types in JS: number, string, boolean, object, null, undefined, symbol, bigint(for at repræsentere store tal) 

// Object: object, array, date

// type coercion(prøver at ændre typer så typerne bliver ens formet)

// we ALWAYS use strcit equality checks:
// === and !==

const stringOne = ""
const stringTwo = '';
const stringThree = `This """ ${} is one way of defining`;
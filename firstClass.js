//identifiers

const mo = 8;
const no = 7;
console.log(mo + no);
console.log(mo * no);

if (mo === 6) {
  console.log(true);
} else {
  console.log(false);
}

//----------comments------------->

//This is a single line comment

/*
This is  a multiple line comment
*/

//identifiers
let _ = 7;

//statements

let fName = "Ada";
let age = 19;

console.log(fName + "is" + age);

// data types

// number

const num = 12;
const num1 = "12";

let abc = num + num1;
console.log(abc);

// string
const str = "uche";
const str2 = `mary`;

// Boolean
const boo = true;
const foo = false;

if (boo === true) {
  // || if (boo)
  console.log("your head is there");
} else {
  console.log("epp me! epp me! him dey carry me go where i no no");
}

//undefined

let money;
// money is yet to be assigned a value so it undefined
console.log(money);

// null

let bank = null;
console.log(bank);

const bigInt = BigInt(9007199254740991967854 + 100);
console.log(Number.MAX_SAFE_INTEGER);
console.log(bigInt);

//symbols

const sym = Symbol("mary");
const sym2 = Symbol("mary");

console.log(sym === sym2);

// object
const man = {
  name: "chux",
  age: 99,
  complexion: "fair",
  iq: null,
  height: "short man",
};

const car = {
  color: "red",
  wheel: "four",
  model: "honda",
  year: 2005,
  new: false,
  seat: "4 seats",
  tinted: true,
};

console.log(car);

man.lips = "pink";
console.log(man);

// FUNCTION SCOPE AND LOCAL SCOPE
const color = "white";

function code() {
  const meat = "well cooked";

  if (true) {
    const food = "ready";
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(color);
}
code();

// DIFFERENCE BTW VAR AND LET
function first() {
  var x = 1;
  {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

first();

function second() {
  let x = 1;
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}

second();

// + operator
let a = 5;
let b = 2;
let c = a + b;
console.log(c);
// - operator
let m = 5;
let n = 2;
let d = m - n;
console.log(d);
// * multiplication
let k = 5;
let j = 2;
let h = k * j;
console.log(h);
// / division
let l = 5;
let s = 2;
let q = l / s;
console.log(q);
// the modulus operator (%) returns the division remainder.
let g = 5;
let w = 2;
let r = g % w;
console.log(r);
//The increment operator (++) increments numbers.
let x = 4;
x++; // this should increase the value of x by 1 so now x will be 5
console.log(x);
//The decrement operator (--) decrements numbers.
let y = 4;
y--; // this should decrease the value of y by 1 so now x will be 3
console.log(y);
QAAAAAAAAQ;
document.write("<h1>who goes there</h1>");

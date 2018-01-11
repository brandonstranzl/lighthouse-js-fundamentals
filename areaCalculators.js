
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) return undefined;
  else return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) return undefined;
  else return base * (height/2);
}
function calculateCircleArea(radius) {
  if (radius < 0) return undefined;
  else return Math.pow(radius,2) * Math.PI;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

console.log("Bob" || " Marley");
console.log("Jeremy" > "Khurram");

var sum = 3 + 2;

var doubleSum = function(a, b) {
  var sum = a + b;
  console.log(sum * 2);
}

doubleSum(5, 4);

console.log(sum);
console.log(doubleSum(sum));

console.log(5 * "3");
console.log(15 === "15");

var seasons = ["spring", "summer", "fall"];
var length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);


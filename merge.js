var newArray = [];

function merge(array1, array2) {
   for (i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  var newArray = array1;
  newArray.sort(function(a, b) {
  return a - b;});
  return newArray;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
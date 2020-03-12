// This is the input
// [1,2,[3,4,5,[6,7]],[8,9, [10]]]
// And expected output is
// [1,2,3,4,5,6,7,8,9,10]

var array1 = [1,2,[3,4,5,[6,7]],[8,9,[10]]];

function changeArray(array1){
    var flatten = (array1) => [].concat(...array1);
    return flatten(array1.map(x=>Array.isArray(x) ? changeArray(x) : x));
}

changeArray(array1);
console.log(changeArray(array1));


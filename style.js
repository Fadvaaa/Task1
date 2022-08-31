var str = "A,B,C,A,E,A";
var ch = 'A';

var count = [...str].filter(x => x === ch).length;
console.log(count);
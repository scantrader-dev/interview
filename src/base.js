const sum = add(3)(2);
// sum = 5
console.log(sum);

function add () {
  return (x) => arguments[0] + x
}
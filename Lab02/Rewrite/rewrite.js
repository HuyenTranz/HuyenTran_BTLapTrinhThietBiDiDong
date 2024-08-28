// Prototype
var options = [22, 10, 20, 30, 40, 50];

Array.prototype.myMap = function (element) {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(element(this[i]));
  }
  return newArr;
};

var map = options.myMap((item) => {
  return item * 2;
});
console.log(`map: ${map}`);




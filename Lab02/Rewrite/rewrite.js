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

// Filter
var filterArr = ["apple", "orange", "banana", "mango"];
Array.prototype.myFilter = function (callback) {	
    var newFilter = [];
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i]).length > 5)
            newFilter.push(this[i]);
    }
    return newFilter;
}

var filterArr1 = filterArr.myFilter((item) =>{
    return item;
})
console.log(filterArr1);

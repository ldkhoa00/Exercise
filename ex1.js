const isEqual = (param1, param2) => {
  if (typeof param1 != "object" || typeof param2 != "object") {
    return param1 === param2;
  } else {
    //param1 and param2 are same object type
    //check type array with length
    if (
      Array.isArray(param1) && Array.isArray(param2) && param1.length != param2.length
    ) {
      return false;
    }

    var equal = false;
    for (var index in param1) {
      if (param2[index] != null) {
        equal = isEqual(param1[index], param2[index]);
      } else {
        equal = false;
      }
      if (!equal) {
        break;
      }
    }

    return equal;
  }
};

const value1 = [{ year: 2000 }, { year: 2010 }, { year: 2020 }];
const value2 = [{ year: 2000 }, { year: 2010 }, { year: 2020 }];


const result = isEqual(value1, value2);
console.log(result);
console.log(value1 === value2);

function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

var obj = { 
  a: 1,
  b: { 
    c: 2
  }
}
var newObj = cloneObject(obj);
obj.b.c = 20;

console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } 
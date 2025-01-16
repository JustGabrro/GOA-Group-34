const items = ['apple', 'banana', 'orange', 'grape'];

const transformArrayToObject = (array) => {
  return array.reduce((result, item, index) => {
    result[index] = item;
    return result;
  }, {});
};

const result = transformArrayToObject(items);
console.log(result);

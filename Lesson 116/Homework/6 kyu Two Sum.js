function twoSum(numbers, target) {
    let numToIndex = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let complement = target - numbers[i];
      
      if (complement in numToIndex) {
        return [numToIndex[complement], i];
      }
      
      numToIndex[numbers[i]] = i;
    }
  }
  
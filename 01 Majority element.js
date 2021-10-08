const input = `2
6
1 1 1 1 2 3
5
1 1 2 2 3`;

// finds element with most count
function findMajorityElement(nums) {
  // Approach

  // For first array
  // [ 1, 1, 1, 1, 2, 3 ]

  // 1. Make an object of all the numbers as key with their count
  // { '1': 4, '2': 1, '3': 1 }

  // 2. Go through all the numbers/keys of the object and keep track of maximum count and maximum element
  // maxCount = 4, maxElement = 1

  // 3. if maxCount is greater than n/2, return the element name
  // 4. else return -1

  // 1. Make an object of all the numbers as key with their count
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  // 2. Go through all the numbers/keys of the object and keep track of maximum count and maximum element
  let maxCount = 0;
  let maxElement;
  // for each key
  for (let key in obj) {
    // if key valure is greater than count, set maxCount to that value and also update the maxElement
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxElement = key;
    }
  }

  // 3. if maxCount is greater than n/2, return the element name
  if (maxCount > nums.length / 2) {
    return maxElement;
  } else {
    // 4. else return -1
    return -1;
  }
}

let breakInput = input.split("\n");
for (let i = 1; i < breakInput.length; i += 2) {
  let nums = breakInput[i + 1].split(" ").map(Number);

  let res = findMajorityElement(nums);
  console.log(res);
}

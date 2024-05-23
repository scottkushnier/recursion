/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) {
    return 1;
  } else return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 0) {
    return undefined;
  } else if (words.length == 1) {
    return words[0].length;
  } else {
    const longestInRest = longest(words.slice(1));
    if (words[0].length > longestInRest) {
      return words[0].length;
    } else {
      return longestInRest;
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 2) {
    return str[0];
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  } else {
    if (str[0] != str[str.length - 1]) {
      return false;
    } else return isPalindrome(str.slice(1, -1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length == 0) {
    return -1;
  }
  if (val == arr[0]) {
    return 0;
  } else {
    const ind = findIndex(arr.slice(1), val);
    if (ind == -1) {
      return -1;
    } else {
      return 1 + ind;
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 0) {
    return str;
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (typeof obj == "string") {
    return [obj];
  }
  if (typeof obj == "object") {
    const vals = Object.values(obj);
    let acc = [];
    for (let val of vals) {
      strs = gatherStrings(val);
      if (strs) {
        acc = acc.concat(strs);
      }
    }
    return acc;
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  console.log("look for ", val, " in ", arr);
  if (arr.length == 0) {
    return -1;
  } else if (arr.length == 1) {
    if (arr[0] == val) {
      return 0;
    } else {
      return -1;
    }
  } else {
    const mid = arr.length >> 1;
    let ind;
    console.log("mid: ", mid, "val: ", arr[mid]);
    if (val < arr[mid]) {
      ind = binarySearch(arr.slice(0, mid), val);
      if (ind == -1) {
        return -1;
      } else {
        return ind;
      }
    } else {
      ind = binarySearch(arr.slice(mid), val);
      if (ind == -1) {
        return -1;
      } else {
        return ind + mid;
      }
    }
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};

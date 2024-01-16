var searchInsert = function (nums, target) {
  let left = 0, ans = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left +((right -  left)) >> 1
    // let mid = left + Math.floor((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1
      ans = left
    } else if (nums[mid] < target) {
      left = mid + 1
      ans = left
    }
    else {
      ans = mid
      break
    }
  }
  return ans;
};
searchInsert([1, 3, 5, 6], 2)
console.log(searchInsert([1, 3, 5, 6], 2),'searchInsert([1, 3, 5, 6], 0)');
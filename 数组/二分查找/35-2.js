var searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1, ans = nums.length;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);

    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }

  return ans;
};
searchInsert([1, 3, 5, 6], 0)
console.log(searchInsert([1, 3, 5, 6], 0),'searchInsert([1, 3, 5, 6], 0)');
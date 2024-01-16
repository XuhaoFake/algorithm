function binarySearch(arr, target) {  
  let left = 0;  
  let right = arr.length - 1;  
  
  while (left <= right) {  
    let mid = Math.floor((left + right) / 2);  
    if (arr[mid] === target) {  
      return mid; // 找到目标值，返回其索引  
    } else if (arr[mid] < target) {  
      left = mid + 1; // 在右半部分继续查找  
    } else {  
      right = mid - 1; // 在左半部分继续查找  
    }  
  }  
  
  return -1; // 没有找到目标值，返回-1  
}  
  
// 测试数组  
let arr = [2, 4, 6, 8, 10, 12];  

let target = 10;  
console.log("查找目标值:", target);  
  
let result = binarySearch(arr, target);  
console.log("查找结果:", result);
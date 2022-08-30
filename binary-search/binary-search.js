/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let count = 0; count < nums.length; count++){
        if(nums[count] === target){
            return count;
        }
    }
    return -1;
};
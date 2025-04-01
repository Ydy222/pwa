function solution(nums) {
    nums.sort();
    const pp = new Set();
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const prime = nums[i] + nums[j] + nums[k];
                if (test(prime) && i != j && j != k) {
                    // console.log("nums[i] = " + nums[i] +
                    //     " nums[j] = " + nums[j] +
                    //     " nums[k] = " + nums[k]);
                    // pp.add([nums[i],nums[j],nums[k]].sort().join(","));
                    // pp.add([i, j, k].sort().join(","));
                    pp.add(prime);
                }
            }
        }
    }
    console.log(pp)
    return pp.size;
}

function test(item) {
    if (item < 2) return false;
    for (let i = 2; i <= Math.sqrt(item); i++) {
        if (item % i == 0) return false;
    }
    return true;
}

console.log(solution([1, 2, 3, 4]))
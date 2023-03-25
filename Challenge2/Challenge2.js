function missingNumber(nums){
    n=nums.length
    let expectedSum = 0;
    let actualSum = 0;
    for (let i=0; i<=n; i++){
        expectedSum+=i;
    }
    for (let i=0; i<n; i++){
        actualSum+=nums[i]
    }

    return expectedSum-actualSum;

}

console.log(missingNumber([0,1,3,2,5,6]))
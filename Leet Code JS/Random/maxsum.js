function maxUniqueSum(arr, k) {
    let start = 0, end = 0;
    let currentSum = 0;
    let maxSum = 0;
    let uniqueElements = new Set();

    while (end < arr.length) {
        // Add the current element to the set and sum
        while (uniqueElements.has(arr[end])) {
            // Shrink the window until the duplicate is removed
            uniqueElements.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }

        uniqueElements.add(arr[end]);
        currentSum += arr[end];

        // Check if the window size is exactly k
        if (end - start + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);

            // Shrink the window to maintain size k
            uniqueElements.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }

        // Expand the window
        end++;
    }

    return maxSum;
}

// Example usage
const arr = [1,5,4,2,9,9,9];
const k = 3;
console.log(maxUniqueSum(arr, k)); // Output: 15 (subarray [4, 5, 6])

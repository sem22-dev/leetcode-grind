let nums = [100, 4, 200, 1, 3, 2, 5, 6, 7, 8];

function longestConsecutive(nums) {
    let sol = new Solution();
    return sol.longestConsecutive(nums);
}

class Solution {
    longestConsecutive(nums) {
        // Convert to Set for O(1) lookup
        const num_set = new Set(nums);

        let longest = 0;

        // Check only if it's the start of a sequence
        for (let num of num_set) {
            if (!num_set.has(num - 1)) {
                let current_streak = 1;

                // Count consecutive numbers
                while (num_set.has(num + 1)) {
                    num++;
                    current_streak++;
                }

                // Update max streak
                longest = Math.max(longest, current_streak);
            }
        }

        return longest;
    }
}

console.log(longestConsecutive(nums));

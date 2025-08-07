from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        # Edge case: empty input
        if not height:
            return 0

        # Initialize two pointers at both ends
        l, r = 0, len(height) - 1

        # Track the maximum height seen so far from both sides
        max_l, max_r = height[l], height[r]

        # Accumulator for total trapped water
        output = 0

        # Loop until the two pointers meet
        while l < r:
            # Decide which side to move based on the smaller max height
            if max_l < max_r:
                l += 1                              # Move left pointer right
                max_l = max(max_l, height[l])       # Update max on the left
                output += max_l - height[l]         # Water trapped at current position
            else:
                r -= 1                              # Move right pointer left
                max_r = max(max_r, height[r])       # Update max on the right
                output += max_r - height[r]         # Water trapped at current position

        return output

# Test case
height = [0,1,0,2,1,0,1,3,2,1,2,1]
sol = Solution()
print(sol.trap(height))  # Output: 6

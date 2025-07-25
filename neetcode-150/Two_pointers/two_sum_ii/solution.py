from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # 1. Initialize two pointers: left and right
        l, r = 0, len(numbers) - 1

        # 2. Move pointers while left < right
        while l < r:
            current_sum = numbers[l] + numbers[r]

            # 3. If the sum matches the target, return 1-indexed positions
            if current_sum == target:
                return [l + 1, r + 1]

            # 4. Move left pointer to increase the sum
            elif current_sum < target:
                l += 1

            # 5. Move right pointer to decrease the sum
            else:
                r -= 1

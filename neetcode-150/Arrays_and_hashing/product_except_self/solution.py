from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # 1.check for zero_count
        zero_count = 0
        for num in nums:
            if num == 0:
                zero_count += 1

        # 2.calculate the product for non zero numbers
        product = 1
        for num in nums:
            if num != 0:
                product *= num

        # 3.for zero_count > 1, return [0] * len(nums)
        if zero_count > 1:
            return [0] * len(nums)

        # 4.for 1 zero_count, return product if num == 0 else 0 for num in nums
        elif zero_count == 1:
            return [product if num == 0 else 0 for num in nums]

        # 5.return [product // num for num in nums]
        else:
            return [product // num for num in nums]
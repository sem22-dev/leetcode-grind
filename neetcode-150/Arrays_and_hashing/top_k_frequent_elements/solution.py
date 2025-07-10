from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_map = {}

        for num in nums:
            if num in frequency_map:
                frequency_map[num] += 1
            else:
                frequency_map[num] = 1

        return sorted(frequency_map,
                      key=lambda x: frequency_map[x],
                      reverse=True)[:k]


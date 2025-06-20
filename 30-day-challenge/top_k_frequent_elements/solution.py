from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = {}

        for num in nums:
            if num in freq_map:
                freq_map[num] += 1
            else:
                freq_map[num] = 1
            
        sorted_freq = sorted(freq_map.items(), key = lambda x:x[1], reverse = True)

        return [num for num, count in sorted_freq[:k]]

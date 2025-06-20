from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouped = defaultdict(list)

        for value in strs:
            sorted_value = ''.join(sorted(value))

            grouped[sorted_value].append(value)

        return list(grouped.values())
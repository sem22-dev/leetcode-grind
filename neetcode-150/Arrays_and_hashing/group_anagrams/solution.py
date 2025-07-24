
from typing import List


demo = ["haha", "lol", "burh", "aet", "eat"]

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = dict()

        for n in strs:
            key = tuple(sorted(n))

            if key not in groups:
                groups[key] = []
                
            groups[key].append(n)   
        
        return list(groups.values())
    
sol = Solution()

print(sol.groupAnagrams(demo))
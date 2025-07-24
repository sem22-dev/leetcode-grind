class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Convert the string to lowercase for case-insensitive comparison
        s = s.lower()

        # Set up two pointers: one at the start and one at the end
        left, right = 0, len(s) - 1

        while left < right:
            # Skip non-alphanumeric characters from the left
            while left < right and not s[left].isalnum():
                left += 1
            
            # Skip non-alphanumeric characters from the right
            while left < right and not s[right].isalnum():
                right -= 1
            
            # Compare characters; return False if they don't match
            if s[left] != s[right]:
                return False

            # Move both pointers inward
            left += 1
            right -= 1

        # All characters matched; it's a palindrome
        return True

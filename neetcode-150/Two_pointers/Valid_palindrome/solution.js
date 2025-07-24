
function isPalindrome(s){
    let sol = new Solution()

    return sol.validPalindrome(s)
}

class Solution{
    validPalindrome(s){
        // 1. convert the string to lowercase
        let s_lower = s.toLowerCase();

        // 2. set up two pointers : one at start and one at the end
        let left = 0, right = s_lower.length - 1;

        // 3. while loops whenever left < right
        while(left < right){
             // 4. skip the non alphanumeric chars from left
             while(left < right && !/^[a-z0-9]+$/i.test(s_lower[left])){
                left++
             }

            // 5. skip the non alphanumeric chars right
             while(left < right && !/^[a-z0-9]+$/i.test(s_lower[right])){
                right--
             } 

             // 6. compare left end and right end chars return false if not equal
             if(s_lower[left] !== s_lower[right]){
                return false
             }
             left++
             right--
        }
        return true
    }
}
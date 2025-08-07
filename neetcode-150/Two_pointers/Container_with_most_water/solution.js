function maxArea(height){
    const sol = new Solution();
    return sol.max_area(height)
}

class Solution{
    max_area(height){
        let res = 0;

        let left = 0;
        let right = height.length - 1

        while(left < right){
            const width = right - left;
            const min_height = Math.min(height[left], height[right]);
            const current_area = width * min_height;

            res = Math.max(res, current_area);
            if(height[left] < height[right]){
                left++;
            } else{
                right--;
            }
        }

        return res;
    }
}
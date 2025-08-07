class Solution{
    trap(height){
        if(height.length === 0){
            return 0
        }

        let output = 0

        let left = 0;
        let right = height.length - 1

        let max_left = height[left]
        let max_right = height[right]

        while(left < right){
            if(height[left] < height[right]){
                left++;
                max_left = Math.max(max_left, height[left]);
                let min_wall = Math.min(max_left, max_right)
                output += Math.max(0, min_wall - height[left])
            } else {
                right--;
                max_right = Math.max(max_right, height[right]);
                let min_wall = Math.min(max_left, max_right)
                output += Math.max(0, min_wall - height[right])
            }
        }

        return output;
    }
}

// test
height = [0,1,0,2,1,0,1,3,2,1,2,1]
function trap(height){
    const sol = new Solution();
    return sol.trap(height)
}

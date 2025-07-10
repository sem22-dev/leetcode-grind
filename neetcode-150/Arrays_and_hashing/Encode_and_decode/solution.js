class Solution {
    
    encode(strs) {
        let res = ""

        for(let i = 0; i < strs.length; i++){
            res += strs[i].length + "#" + strs[i];
        }
        return res;
    }
        
    
    decode(str) {
        let i = 0, res = [];

        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j += 1
            }
            const length = Number(str.slice(i , j))
            j += 1;
            res.push(str.slice(j, j + length));
            i = j + length;
        }

        return res;

    }
}

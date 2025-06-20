
var groupAnagrams = function(strs) {
    const grouped = new Map();

    for(const value of strs){
        const sorted_string = value.split('').sort().join('');

        if(!grouped.has(sorted_string)){
            grouped.set(sorted_string, [])
        }

        grouped.get(sorted_string).push(value)
    }

    return Array.from(grouped.values())
};
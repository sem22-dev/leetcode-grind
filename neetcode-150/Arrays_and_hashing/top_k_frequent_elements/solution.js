
function topKFrequent(nums, k) {
    const freq_map = new Map();

    for(const num of nums){
        if(freq_map.has(num)){
            freq_map.set(num, freq_map.get(num) + 1)
        } else {
            freq_map.set(num, 1)
        }
    }

    // [...freq_Map.entries()] or Array.from(freq_Map) gives the same result
    return Array.from(freq_map).sort((a, b) => b[1] - a[1]).slice(0, k).map(x => x[0]);

};

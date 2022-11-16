/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let m = 0
    let b = 0
    let z = {}
    for( i = 0; i<s.length;i++){
        if(z[s[i]] !== undefined && z[s[i]] >= b){
            b = z[s[i]] + 1
        }
        z[s[i]]=i
        m = Math.max(m, i - b + 1)
    }
    return m
};

//time O(n) space O(1)
//one line:
lengthOfLongestSubstring=(s,m=0,b=0,z={})=>{for(i=0;i<s.length;i++){if(z[s[i]]!==undefined&&z[s[i]]>=b){b=z[s[i]]+1}z[s[i]]=i;m=Math.max(m,i-b+1)}return m}
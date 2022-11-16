/**
 * @param {number[]} c
 * @param {number} e
 * @return {boolean[]}
 */
 var kidsWithCandies = function(c, e) {
    const m = Math.max(...c)
    let r = []
    for(let i =0;i<c.length;i++){
        let cv = c[i]
        r.push(cv + e >= m)
    }
    return r
    
};

//one line:
kidsWithCandies=(c,e,m=Math.max(...c),r=[])=>{for(i=0;i<c.length;i++){jz=c[i];r.push(jz+e>=m);}return r}
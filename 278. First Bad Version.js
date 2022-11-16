var solution = function(z) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n;
        while (l < r) {
             m = l + Math.floor((r - l) / 2);
            if (z(m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    };
};

//one line:
solution=z=>function(n,l=0,r=n){while(l<r){m=l+Math.floor((r-l)/2);if(z(m)){r=m;}else{l=m+1;}}return l}
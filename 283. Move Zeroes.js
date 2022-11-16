var moveZeroes = function(n) {
    return n.slice().sort((a,b) => !!b-!!a)
};
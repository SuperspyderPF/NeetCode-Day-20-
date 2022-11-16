var mergeTrees = function(r1, r) {
    if (!r1) return r;
    if (!r) return r1;
    r1.left = mergeTrees ( r1.left, r.left );
    r1.right = mergeTrees ( r1.right, r.right );
    r1.val += r.val;
    return r1
};
//one line:
mergeTrees=(r1,r)=>{if(!r1)return r;if(!r)return r1;r1.left=mergeTrees(r1.left,r.left);r1.right=mergeTrees(r1.right,r.right);r1.val+=r.val;return r1}
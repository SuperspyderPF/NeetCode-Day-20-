var countNodes = function(r,e = [],x = [r])  {
     
     
    if (r === null) return e;
    
     
    
    while (x.length !== 0) {
        const row = x.length;
        const z = x.pop();
        
        if (z.right != null) x.push(z.right);
        if (z.left != null) x.push(z.left);
        
        
        e.push(z.val)
    }
    return e.length
    
};

//one line: 
countNodes=(r,e=[],x=[r])=>{if(r===null)return e;while(x.length!==0){z=x.pop();if(z.right!=null)x.push(z.right);if(z.left!=null)x.push(z.left);e.push(z.val)}return e.length}
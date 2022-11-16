var middleNode = function(h) {
    let f = h, s = h;

    while(f && f.next)
    {
        s = s.next;
        f = f.next.next;
    }

    return s;
}
//one line:
middleNode=h=>{f=h,s=h;while(f&&f.next){s=s.next;f=f.next.next;}return s}
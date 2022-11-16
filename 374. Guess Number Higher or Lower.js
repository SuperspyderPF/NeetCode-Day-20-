guessNumber=(n,l=1,r=n)=>{while(l<r){m=l+Math.floor((r-l)/2);if(guess(m)<=0){r=m;}else{l=m+1;}}return l};



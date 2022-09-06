function grow(x){
    return x.reduce((y,z)=> y*z);
    }

    or

    const grow = x => {
        let res = 1;
        for (let i = 0; i < x.length; i++) {
          res *= x[i];
        }
        return res;
      };
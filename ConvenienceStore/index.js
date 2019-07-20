function changeEnough(change, amountDue) {
    let q = change[0] * .25;
    let d = change[1] * .10;
    let n = change[2] * .05;
    let p = change[3] * .01;
    let total = q + d + n + p;
    if(total >= amountDue){
        return true;
    };
    return false
};


console.log(changeEnough([10, 0, 0, 50], 2.85));



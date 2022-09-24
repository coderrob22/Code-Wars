Return negative Number.

function makeNegative(num) {
    return -Math.abs(num);
  }
  

or

function makeNegative(num) {
    return num < 0 ? num : -num;
  }
  
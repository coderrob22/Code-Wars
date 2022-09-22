Remove space from string x


function noSpace(x){return x.split(' ').join('')}

or

const noSpace = x => x.replace(/ /g, "");
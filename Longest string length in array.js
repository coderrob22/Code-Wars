function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let x = 0; x < words.length; x++) {
      if (words[x].length > maxLength) {
        maxLength = words[x].length;
      }
    }
  
    return maxLength;
  }
  
  
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
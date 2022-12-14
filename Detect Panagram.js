// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
  }

  or


function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  
  or


function isPangram(string){
    //...
    let correct = string.toLowerCase().split('');
    let az= 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let letter of correct)
      for (let x=0; x < correct.length; x++)
        if (letter == az[x]) az[x]= "";
    az= az.filter(value=> value !== '');
   return !az.length ? true : false;
  };
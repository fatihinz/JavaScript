
function findLongestWord(str) {
  
var  x = str.split(" ");
  var longest = 0;
  
  for (var i=0;i<x.length;i++){
    if (longest < x[i].length){
      longest = x[i].length;
      word =x[i];
    }
  }
  
  return word.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

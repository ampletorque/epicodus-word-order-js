var wordOrder = function(input){
  var words = input.split(" ");
  var table = new Object();

  for (var counter = 0; counter < words.length; counter++) {
    var newWord = words[counter].toLowerCase();
    words[counter] = newWord;
  }

  words.forEach(function(word) {
    if (table[word]) {
      table[word] = table[word] + 1;
    } else {
      table[word] = 1;
    }
  })

  return table;
};

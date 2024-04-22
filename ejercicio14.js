const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  function repeatCounter(list) {
    let count = {}; 
      
    for (let i = 0; i < list.length; i++) {
      let word = list[i];
      if (count[word]) {
        count[word] += 1;
      } else {
        count[word] = 1; 
      }
    }
    return count; 
  }
  
  const countedWords = repeatCounter(words);
  for (const word in countedWords) {
    console.log(word + ': ' + countedWords[word]);  
  }
  
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
 
  function removeDuplicates(list) {
    const uniqueSet = new Set(list);
  
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }

  console.log(removeDuplicates(duplicates));
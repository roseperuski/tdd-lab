function convertToPigLatin(word){
  word=word.toLowerCase();
  let vowelRegex = /[aeiou]/; 
 let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/; 
  

  let wordArray=word.split('');
  console.log(wordArray[0]);

  if(vowelRegex.test(wordArray[0])){
    console.log("it is a vowel");
    wordArray.push('way');
    console.log(wordArray);
    return wordArray = wordArray.join('');
  } 

  if(consonantRegex.test(wordArray[0])){
    console.log("it is a consonant");
    let howMany= 1;
    
    wordArray.forEach(element => {
      console.log(consonantRegex.test(element));
      
      
      
    });

    console.log(`num of consonants: ${howMany}`)

    let converted = wordArray.splice(0,howMany);
    wordArray.push(`${converted[0]}ay`);
    wordArray = wordArray.join('');

    return wordArray;
  }
  

}




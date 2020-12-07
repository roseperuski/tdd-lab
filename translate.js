function convertToPigLatin(word){
  word=word.toLowerCase();

let vowelRegex = /[aeiou]/; 
 let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/; 
  

  let wordArray=word.split('');
  //console.log(wordArray[0]);

//if the first letter is a vowel
  if(vowelRegex.test(wordArray[0])){
   // console.log("it is a vowel");
    wordArray.push('way');
   // console.log(wordArray);
    return wordArray = wordArray.join('');
  } 

//if the first letter(s) is/are consonants
  if(consonantRegex.test(wordArray[0])){
    //console.log("it is a consonant");
    let howMany= 0;
    
    for (let index = 0; index < wordArray.length; index++) {
      
      if(consonantRegex.test(wordArray[index])){
        howMany++
      } else {
        break;
      }
 
    }
    
    //console.log(`num of consonants: ${howMany}`)

    let converted = wordArray.splice(0,howMany);
    converted=converted.join('');
    //console.log(`converted is ${converted}`);
    wordArray.push(`${converted}ay`);
    //console.log(`word array pushed  is ${wordArray}`);
    wordArray = wordArray.join('');

    //console.log(`wordArray before returning is ${wordArray}`);

    return wordArray;
  }
  

}




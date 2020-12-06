describe('convertToPigLatin', function() {
    
    //user enters word ending in vowel
    it('vowel should end in way', function(){
        expect(convertToPigLatin('eloquent')).toEqual('eloquentway');
    });

    // // user enters word ending in consanant. 
    it('should convert word starting in consonant properly', function(){
        expect(convertToPigLatin('cats')).toEqual('atscay');
    });
   // If a word starts with two consonants move the two consonants to the end of the word and add "ay."
   it('should convert word starting w/2 consonants properly', function(){
    expect(convertToPigLatin('pneumonia')).toEqual('eumoniapnay');
});
//user enters null

//user enters number

//user enters characters (ex. *, %)
//large number
//one letter word
})


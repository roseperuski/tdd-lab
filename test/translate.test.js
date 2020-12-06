describe('convertToPigLatin', function() {
    
    //user enters word ending in vowel
    it('vowel should end in way', function(){
        expect(convertToPigLatin('eloquent')).toEqual('eloquentway');
    });

    it('vowel should end in way', function(){
        expect(convertToPigLatin('away')).toEqual('awayway');
    });

    it('vowel should end in way', function(){
        expect(convertToPigLatin('ilk')).toEqual('ilkway');
    });

    // // user enters word ending in consanant. 
    it('should convert word starting in consonant properly', function(){
        expect(convertToPigLatin('cats')).toEqual('atscay');
    });

   // If a word starts with two consonants more the two consonants to the end of the word and add "ay."
   it('should convert word starting w/2 consonants properly', function(){
    expect(convertToPigLatin('crate')).toEqual('atecray');
    });

    it('should convert word starting w/3 consonants properly', function(){
        expect(convertToPigLatin('qpneumonia')).toEqual('eumoniaqpnay');
        });
// lowercase converstion
// it('should convert word to lowercase', function(){
//     expect(convertToPigLatin('Tired')).toEqual('iredtay');
//     });

//no case conversion
    it('should not convert word to lowercase', function(){
        expect(convertToPigLatin('Tired')).toEqual('iredTay');});
  //punctuation in string  
    it('should allow punctuation in the input', function(){
        expect(convertToPigLatin('cut-co$')).toEqual('ut-co$cay');});

    it('should allow punctuation in the input', function(){
        expect(convertToPigLatin('#toasty')).toEqual('oasty#tay');});

    // test a number in the string
    it('should return the word if there is a number', function(){
        expect(convertToPigLatin('189')).toEqual('189');
    });
    
    it('should return email addresses as an email addres', function(){
        expect(convertToPigLatin('hello@grandcircus.com')).toEqual('hello@grandcircus.com')
    });

})



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

   // If a word starts with two consonants move the two consonants to the end of the word and add "ay."
   it('should convert word starting w/2 consonants properly', function(){
    expect(convertToPigLatin('crate')).toEqual('atecray');
    });

    it('should convert word starting w/3 consonants properly', function(){
        expect(convertToPigLatin('qpneumonia')).toEqual('eumoniaqpnay');
        });
// lowercase converstion
it('should convert word to lowercase', function(){
    expect(convertToPigLatin('Tired')).toEqual('iredtay');
    });

})


const {expect} = require ('chai');
const reverseString = require('../problems/reverse-string')

describe("reverseString", function() {
    it('Reverses string properly', function(){
        let teststr = "fun";
        expect(reverseString(teststr)).equal("nuf");
    });
    it('Function throws an error when a non-string is passed', function(){
        // expect(() => {reverseString([0]);}).to.throw(TypeError);
        expect(reverseString.bind(null,[0])).to.throw(TypeError);
    });
});


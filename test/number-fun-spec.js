const {expect} = require ('chai');
const {returnsThree, reciprocal} = require ('../problems/number-fun')

describe("returnsThree", function(){
    it('Returns 3 properly', ()=>{
        expect(returnsThree()).to.equal(3);
    })
})

describe("reciprocal test", function(){
    it('Returns reciprocal of input', ()=>{
        expect(reciprocal(5)).to.equal(1/5);
        expect(reciprocal(100)).to.equal(1/100);
    });
    it("Only takes inputs between 1 and 100000", ()=>{
        expect(() => reciprocal(-100)).to.throw(TypeError)
        expect(() => reciprocal(200000)).to.throw(TypeError);
    });
});
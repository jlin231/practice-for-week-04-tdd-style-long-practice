const {expect} = require('chai')
const myMap = require(`../problems/my-map`)
const spies = require("chai-spies");
const chai = require('chai')
chai.use(spies);

describe("myMap test", function(){
    let arr;
    let callback;

    beforeEach (() => {
        arr = [1,2,3];
        callback = (el) => el * 2;
    });

    it('works like Array.map method', function() {
        let map = arr.map((element) => callback(element));
        expect(myMap(arr, callback)).to.eql(map); 
        
    })
    it('does not invoke Array.map method', function(){
        let spy = chai.spy.on(myMap, 'map')
        expect(spy).to.not.have.been.called();
    })
    it('does not mutate original array', function(){
        expect(arr).to.eql([1,2,3]);
    })
    it('callback function is called for each element of the inputArray', function(){

    })
});

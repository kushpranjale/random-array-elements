const randomPick = require('../dist/index')
const expect = require('chai').expect

describe('Index.js',  function(){
    let arr = ["George", "Ben", "James"]
    let numberOfRandomSelection = 2

    it('Should return the correct length pf picked items', async function(){
        let picked = await randomPick.pickRandomElements(arr, numberOfRandomSelection);
        expect(picked.picks.length).to.be.equal(numberOfRandomSelection)
    })

  

    it('Should return elemnts of the array', async function(){
        // arr = ["George", "Ben", "James"]
        // numberOfRandomSelection = 2
        let picked = await randomPick.pickRandomElements(arr, numberOfRandomSelection);
        picked.picks.forEach(function(item){
            expect(arr).to.contain(item)
        })
    })

    it('Should throw an exception if array is undefined', async function(){
        try {
          await randomPick.pickRandomElements(undefined, numberOfRandomSelection)
        }
        catch (err) {
            expect(err.message).to.equal('Illegal argument exception - array is not defined.');
        }
    })

    it('Should throw an exception if n is undefined', async function(){
        try {
            await randomPick.pickRandomElements(arr, undefined)
          }
          catch (err) {
              expect(err.message).to.equal('Illegal argument exception - n is not defined.');
          }
    })

    it('Should throw an error if array is null',async function(){
        try {
            await randomPick.pickRandomElements(null, numberOfRandomSelection)
          }
          catch (err) {
              expect(err.message).to.equal('Illegal argument exception  - array cannot be null.');
          }
    })

    it('Should throw an error if array is empty', async function(){
        try {
            await randomPick.pickRandomElements([], numberOfRandomSelection)
          }
          catch (err) {
              expect(err.message).to.equal('Illegal argument exception - array must at least a length of one.');
          }
    })

    it('Should throw an error if n is less than 0',async function(){
        try {
            await randomPick.pickRandomElements(arr, -1)
          }
          catch (err) {
              expect(err.message).to.equal('Illegal argument exception - n canot be less than 1.');
          }
    })

    it('Should throw an error if n is not a number',async function(){
        try {
            await randomPick.pickRandomElements(arr, 'hi')
          }
          catch (err) {
              expect(err.message).to.equal('Type Error - n must be a number.');
          }
    })

    it('Should throw an error if n is greater than the length of the array',async function(){
        try {
            await randomPick.pickRandomElements(arr, 5)
          }
          catch (err) {
              expect(err.message).to.equal('Illegal argument exception - n cannot be greater than the length of the array.');
          }
    })

    it('Should not mutate the original array',async function(){
        let lengthBefore = arr.length;
        randomPick.pickRandomElements(arr, numberOfRandomSelection);
        expect(lengthBefore).to.equal(arr.length)
    })

})
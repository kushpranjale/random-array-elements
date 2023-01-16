

import MersenneTwister from "mersenne-twister"




   export const pickRandomElements = async (_arrs, _no_to_pick) => {
    if(typeof(_arrs) === 'undefined'){
        throw new Error('Illegal argument exception - array is not defined.');
    }

    if(typeof(_no_to_pick) === 'undefined'){
        throw new Error('Illegal argument exception - n is not defined.')
    }

    if(_arrs === null){
        throw new Error('Illegal argument exception  - array cannot be null.');
    }

    if(_arrs.length < 1){
        throw new Error('Illegal argument exception - array must at least a length of one.')
    }

    if(_no_to_pick < 1){
        throw new Error('Illegal argument exception - n canot be less than 1.');
    }

    if(typeof(_no_to_pick) !== 'number'){
        throw new Error('Type Error - n must be a number.');
    }

    if(_no_to_pick > _arrs.length){
        throw new Error('Illegal argument exception - n cannot be greater than the length of the array.');
    }
    const _arr  = _arrs.slice()
        const _picks = []
        let _array = _arr.slice()
        _array = await arrayShuffle(_array)
        for (let i = 0; i < (_no_to_pick); i++) {
            _array = await arrayShuffle(_array)
            const _generator = new MersenneTwister()
            const _num = Math.floor(_generator.random() * _array.length)
            _picks[i] = _array[_num]
            _array.splice(_num, 1)
            const index = _arr.indexOf(_picks[i])
            if(index > -1)
            _arr.splice(index,1)
        }
        return  {picks: _picks, remaining_ele: _arr}
    }
     function arrayShuffle(array) {
    
        array = [...array];
    
        for (let index = array.length - 1; index > 0; index--) {
            const newIndex = Math.floor(Math.random() * (index + 1));
            [array[index], array[newIndex]] = [array[newIndex], array[index]];
        }
    
        return array;
    }
     

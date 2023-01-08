# @js_fleet/random-array-elements

> Pick random elements from an array 

Uses the [Durstenfeld algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) which is based on the [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) for shuffling and  [mersenne-twister](https://en.wikipedia.org/wiki/Mersenne_Twister) algorithm for the random elements

## Install

```
$ npm install @js_fleet/random-array-elements
```

## Usage

```js
//=> Import pickRandomElements
import { pickRandomElements } from "@js_fleet/random-array-elements";

//=> usage
try {
const arr = [1, 2, 3, 4, 5, 6]
const no_of_picks = 2
const pick = await pickRandomElements(arr,no_of_picks);
//=> { picks: [ 4, 3 ], remaining_ele: [ 1, 2, 5 ] }
} catch(err) {
//=> If any error
}
```


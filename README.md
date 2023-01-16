<p align="center">
  <a href="https://github.com/kushpranjale/random-array-elements/actions/workflows/test.yml"><img src="https://github.com/kushpranjale/random-array-elements/actions/workflows/test.yml/badge.svg" alt="CI status" /></a>
  <a href="https://www.npmjs.com/package/@js_fleet/random-array-elements"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@js_fleet/random-array-elements?style=flat-square"></a>
</p>
## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kushpranjale/random-array-elements?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/kushpranjale/random-array-elements?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/kushpranjale/random-array-elements?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/kushpranjale/random-array-elements?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/kushpranjale/random-array-elements?style=flat-square)

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


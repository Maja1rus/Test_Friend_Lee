import {inputRange} from "./modules/input-range.js";
import {toInteger} from "./modules/toInteger.js";

try {
    const valueRanges = document.querySelectorAll('.input-range__price');
    if (valueRanges.length > 0) {
        valueRanges.forEach(item => {
            item.innerHTML = toInteger(item.innerText).toLocaleString('ru-RU');
        })
    }
} catch (error) {
    console.log(error);
}

try {
    const wrapRange = document.querySelector('[data-js="calculator-range"]');
    if (wrapRange) {
        const range = wrapRange.querySelectorAll('[data-js="range-input"]');
        range.forEach(item => {
            inputRange(item)
        })
    }
} catch (error) {
    console.log(error);
}
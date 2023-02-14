import {inputRange} from "./modules/input-range.js";
import {toInteger} from "./modules/toInteger.js";

const wrapRange = document.querySelector('[data-js="calculator-range"]');

// Форматирование числа
try {
    const valueRanges = wrapRange.querySelectorAll('.input-range__price');
    if (valueRanges.length > 0) {
        valueRanges.forEach(item => {
            item.innerHTML = toInteger(item.innerText).toLocaleString('ru-RU');
        })
    }
} catch (error) {
    console.log(error);
}

// Логика работы input-range
try {
    if (wrapRange) {
        const range = wrapRange.querySelectorAll('[data-js="range-input"]');
        range.forEach(item => {
            inputRange(wrapRange, item)
        })
    }
} catch (error) {
    console.log(error);
}
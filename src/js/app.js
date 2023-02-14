import {inputRange} from "./modules/input-range.js";
import {toInteger} from "./modules/toInteger.js";
import {submitForm} from "./modules/submit-form.js";

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

// Отправка данных
try {
    const btnSend = wrapRange.querySelector('[data-js="btn-send"]');
    if (btnSend) {
        submitForm(wrapRange, btnSend)
    }
} catch (error) {
    console.log(error);
}
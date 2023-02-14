import 'toolcool-range-slider';
import {toInteger} from "./toInteger.js";
import {percentFn} from "./percent.js";
import {monthCost} from "./month-cost.js";
import {contractCost} from "./contract-cost.js";
export function inputRange(wrapRange, range) {

    const $slider = range.querySelector('[data-js="range__slider"]');
    const $value = range.querySelector('[data-js="range__value"]');

    $slider.addEventListener('change', (e) => {
        // Обновление данных в data-js-count
        const cost = wrapRange.querySelector('[data-js-range="cost"]').getAttribute('data-js-count');
        const first = wrapRange.querySelector('[data-js-range="first"]').getAttribute('data-js-count');
        const month = wrapRange.querySelector('[data-js-range="month"]').getAttribute('data-js-count');
        let value = Math.round(e.detail.value)

        // Обновление перменных input range
        inputRangeValue(value)
        // Подсчёт процентов
        percentFn(wrapRange)
        // Подсчёт ежемесячного платежа
        monthCost(wrapRange, cost, first, month)
        // Подсчёт дорогова лизина
        contractCost(wrapRange, first, month)
    });

    function inputRangeValue(value) {
        $value.innerHTML = toInteger(value).toLocaleString('ru-RU');
        $value.setAttribute('data-js-count', value);
    }
}







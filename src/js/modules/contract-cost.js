import {toInteger} from "./toInteger.js";

export function contractCost (wrapRange, first, month) {
    const monthCostHtml = wrapRange.querySelector('[data-js="month-cost"]').getAttribute('data-js-count');
    const contractCostHtml = wrapRange.querySelector('[data-js="contract-cost"]')
    const contractCostValue = toInteger(first) + toInteger(monthCostHtml) * toInteger(month);

    contractCostHtml.innerHTML = toInteger(Math.round(contractCostValue)).toLocaleString('ru-RU');
}
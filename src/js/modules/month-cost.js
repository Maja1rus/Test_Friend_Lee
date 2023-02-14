import {toInteger} from "./toInteger.js";

export function monthCost (wrapRange, cost, first, month) {
    const monthCostHtml = wrapRange.querySelector('[data-js="month-cost"]')
    let monthCostValue = (cost - first) * (0.05 * Math.pow((1 + 0.05), month) / (Math.pow((1 + 0.05), month) - 1));
    monthCostHtml.innerHTML = toInteger(Math.round(monthCostValue)).toLocaleString('ru-RU');
    monthCostHtml.setAttribute('data-js-count', Math.round(monthCostValue));
}
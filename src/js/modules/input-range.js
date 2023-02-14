import 'toolcool-range-slider';
import {toInteger} from "./toInteger.js";
export function inputRange(range) {

    const $slider = range.querySelector('[data-js="range__slider"]');
    const $value = range.querySelector('[data-js="range__value"]');

    $slider.addEventListener('change', (e) => {
        $value.innerHTML = toInteger(e.detail.value).toLocaleString('ru-RU');
    });
}







export function percentFn (wrapRange) {
    const percent = wrapRange.querySelector('[data-js="range__percent"]');
    const inputRangeCount = wrapRange.querySelector('[data-js-range="cost"]').getAttribute('data-js-count');
    const inputRangeFirst = wrapRange.querySelector('[data-js-range="first"]').getAttribute('data-js-count');
    let percentCount = Math.round(inputRangeFirst/inputRangeCount*100);
    percent.innerHTML = `${percentCount >= 100 ? 100 : percentCount}%`;
}
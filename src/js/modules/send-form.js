import {sendData} from "./send-data.js";

export const sendForm = (form, btn) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Собираем данные
    const cost = form.querySelector('[data-js-range="cost"]').getAttribute('data-js-count');
    const first = form.querySelector('[data-js-range="first"]').getAttribute('data-js-count');
    const month = form.querySelector('[data-js-range="month"]').getAttribute('data-js-count');
    const monthCost = form.querySelector('[data-js="month-cost"]').getAttribute('data-js-count');
    const contractCost = form.querySelector('[data-js="contract-cost"]').getAttribute('data-js-count');

    console.log(contractCost)

    data.rangeCost = cost;
    data.rangeFirst = first;
    data.rangeMonth = month;
    data.monthCost = monthCost;
    data.contractCost = contractCost;

    const formList = JSON.stringify(data)

    console.log(formList)

sendData('https://jsonplaceholder.typicode.com/posts', formList, btn)
    .then(() => {
        form.reset()
    })
    .catch((err) => {
        console.log(err);
    });
}
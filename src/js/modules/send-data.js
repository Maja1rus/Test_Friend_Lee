export const sendData = async (url, data, btn) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });
    if (!response.ok) {
        throw new Error(
            `Ошибка по адреcу ${url}, статус ошибки ${response.status}`
        );
    } else {
        alert(data)
        btn.setAttribute("disabled", "disabled");
    }

    return await response.json();
};
const getCurrencyString = (value) => {
    value = value.toFixed(0);
    const money = new Intl.NumberFormat(`en-US`).format(value);
    return money.replaceAll(',', '.');
}

export {
    getCurrencyString,
};
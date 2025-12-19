const numberFormat = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD',
});

export const formatCurrency = (val: number) => {
    return numberFormat.format(val);
};

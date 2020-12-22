const formatCurrency = num => `$${Number(num.toFixed(2)).toLocaleString()} `;

export default formatCurrency;

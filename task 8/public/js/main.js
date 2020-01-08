


const getExchangeRate = async (fromCurrency, toCurrency) => {
	const response = await axios.get('http://apilayer.net/api/live?access_key=e5dbd3ce07ededfefe196c777ba71812&format=1');
	const rate = response.data.quotes;
	const baseCurrency = response.data.source;
	const usd = 1 / rate[`${baseCurrency}${fromCurrency}`];
	const exchangeRate = usd * rate[`${baseCurrency}${toCurrency}`];

	return exchangeRate;
}

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
	const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
	const convertedAmount = (amount * exchangeRate).toFixed(2);

	return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}`;
}


function say() {
	convertCurrency(from.value, to.value, sum.value)
    .then((message) => {
      result.innerHTML = message;
    });
}

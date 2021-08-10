// Dropdowm menu for exhange rates
$( "#exchangeRateOptions" ).selectmenu()



// Must be YYYY-MM-DD format
const sampleDates = ["2017-07-23", "2017-07-24", "2012-05-12", "2020-06-13"];
const sampleCurrencies = [
  "EUR",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "CNY",
  "DKK",
];
const sampleTickerSymbols = [
  "AAPL",
  "GOOG",
  "MSFT",
  "FB",
  "TSLA",
  "AMZN",
  "NFLX",
];
const appId = "2fb30b4e6ff34fed962b343830bf09e1";

// Logic to handle currency data once fetched
const handleCurrencyData = (data) => {
  console.log("currency data: " + data);
};

// Logic to handle ticker data once fetched
const handleStockData = (data) => {
  console.log("stock data: " + data);
};

// Fetch currency data asynchronously
const getCurrencies = async (date, comparisonCurrency) => {
  $.get(
    "https://openexchangerates.org/api/historical/" + date + ".json",
    { app_id: appId },
    function (data) {
      handleCurrencyData(data.rates[comparisonCurrency]);
    }
  );
};

// Fetch ticker data asynchronously
const getStocks = async (date, ticker) => {};

getCurrencies(sampleDates[2], sampleCurrencies[3]);

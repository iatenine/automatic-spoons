// Dropdowm menu for exhange rates
// ????
// $("#exchangeRateOptions").selectmenu;

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
const twelvedataAppId = "37679fd95e8b4db69d4e464f3991b8a5";

// Logic to handle currency data once fetched
const handleCurrencyData = (data) => {
  console.log("currency data: " + data);
};

// Logic to handle ticker data once fetched
const handleStockData = (data) => {
  // Need to access keys individually to get the values
  console.log("name: ", data.name);
  console.log("close: ", data.close);
};

// Fetch currency data asynchronously
const getCurrencies = async (date, comparisonCurrency) => {
  $.get(
    "https://openexchangerates.org/api/historical/" + date + ".json",
    { app_id: appId, mode: "no-cors" },
    function (data) {
      handleCurrencyData(data.rates[comparisonCurrency]);
    }
  );
};

function onDateChanged(date) {
  console.log(date);
}

// Fetch ticker data asynchronously
const getStocks = async (ticker) => {
  console.log(ticker);
  var settings = {
    url:
      "https://api.twelvedata.com/quote?symbol=" +
      ticker +
      "&apikey=" +
      twelvedataAppId,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    // for debugging, un-comment to see all avaiable keys
    // console.log(response);
    handleStockData(response);
  });
};

getCurrencies(sampleDates[2], sampleCurrencies[3]);
getStocks(sampleTickerSymbols[3]);

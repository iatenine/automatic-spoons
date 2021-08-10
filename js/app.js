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
    { app_id: appId, mode: "no-cors" },
    function (data) {
      handleCurrencyData(data.rates[comparisonCurrency]);
    }
  );
};

// Fetch ticker data asynchronously
const getStocks = async (ticker) => {
  // $.get(
  //   "https://www.styvio.com/api/aapl",
  //   { mode: "same-origin" },
  //   function (data) {
  //     console.log(data);
  //     // handleCurrencyData(data.rates[comparisonCurrency]);
  //   }
  // );
  // return;
  // Create fetch request
  // const request = new Request("https://www.styvio.com/api/aapl", {
  //   method: "GET",
  //   mode: "no-cors",
  // });
  // // Send request
  // return fetch(request)
  //   .then(function (response) {
  //     return JSON.parse(response);
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     // handleStockData(data);
  //   });

  var settings = {
    origin: "https://www.styvio.com",
    url: "https://www.styvio.com/api/AAPL",
    method: "GET",
    timeout: 0,
    mode: "no-cors",
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};

getCurrencies(sampleDates[2], sampleCurrencies[3]);
getStocks("aapl");

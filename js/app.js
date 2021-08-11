// Dropdowm menu for exhange rates
// ????
// $("#exchangeRateOptions").selectmenu;
// All currencies pulled from this array
const currencies = [
  { name: "US Dollar", code: "USD" },
  { name: "Euro", code: "EUR" },
  { name: "Japanese Yen", code: "JPY" },
  { name: "Australian Dollar", code: "AUD" },
];

const appId = "2fb30b4e6ff34fed962b343830bf09e1";
const twelvedataAppId = "37679fd95e8b4db69d4e464f3991b8a5";

// Logic to handle currency data once fetched
const handleCurrencyData = (event) => {
  var date = $(".dateInput").val();
  console.log(date);
  var comparisonCurrency = $("#exchangeRateOptions").val();
  console.log(comparisonCurrency);
  $("#currencyView").submit(function (event) {
    //create populate append list item
    $("#currencyView").append("<li></li>");
    $(this).text();
  });
  console.log(event);
};

function onOptionChanged(selection) {
  console.log(selection);
}
//declare global variables referencing user input

// Logic to handle ticker data once fetched
const handleStockData = (data) => {
  // Need to access keys individually to get the values
  console.log("name: ", data.name);
  console.log("close: ", data.close);
};

const addOption = (currencyCode, currencyName) => {
  const opt = $("<option>" + currencyCode + " - " + currencyName + "</option>");
  const select = $("#exchangeRateOptions");
  select.append(opt);
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

<<<<<<< HEAD
getCurrencies(sampleDates[2], sampleCurrencies[3]);
getStocks(sampleTickerSymbols[3]);
//EVENT HANDLERS
$("#save-btn").on("click", handleCurrencyData);
=======
currencies.forEach(function (currency) {
  addOption(currency.code, currency.name);
});

$("#save-btn").on("click", handleCurrencyData);

// Leave commented to keep api request rates low
// (should be triggered by a button click really anyways)
// getCurrencies(sampleDates[2], sampleCurrencies[3]);
// getStocks(sampleTickerSymbols[3]);
>>>>>>> 82b41fc6c1eb6fcb111a7db5872637b74631b025

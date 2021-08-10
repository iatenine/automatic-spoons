// Dropdowm menu for exhange rates
$("#exchangeRateOptions").selectmenu();

// Must be YYYY-MM-DD format

const appId = "2fb30b4e6ff34fed962b343830bf09e1";

// Logic to handle currency data once fetched
const handleCurrencyData = (event) => {
  $("li").each(function () {
    $(this).text();
  });
  console.log(event);
};

//declare global variables referencing user input
var date = $(".dateInput").val();
console.log(date);
var comparisonCurrency = $(".currencyInput").val();
console.log(comparisonCurrency);

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

function onDateChanged(date) {
  console.log(date);
}

// Fetch ticker data asynchronously
const getStocks = async (date, ticker) => {};

//EVENT HANDLERS
$("#save-btn").on("click", handleCurrencyData);

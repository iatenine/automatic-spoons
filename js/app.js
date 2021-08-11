// Dropdowm menu for exhange rates
// ????
// $("#exchangeRateOptions").selectmenu;
$("#exchangeRateOptions").selectmenu();




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
]
// All currencies pulled from this array
const currencies = [
  { code: "USD", nameC: "US Dollar" },
  { code: "EUR", nameC: "Euro" },
  { code: "GBP", nameC: "British Pound" },
  { code: "JPY", nameC: "Japanese Yen" },
  { code: "CHF", nameC: "Swiss Franc" },
  { code: "AWG", nameC: "Arubuan Florin" },
  { code: "AZN", nameC: "Azerbaijani Manat" },
  { code: "BAM", nameC: "Bosnia-Herzegovina Covertible Mark" },
  { code: "BBD", nameC: "Barbadina Dollar" },
  { code: "BDT", nameC: "Bangladeshi Taka" },
  { code: "BGN", nameC: "Bulgarian Lev" },
  { code: "BHD", nameC: "Bahraini Dinar" },
  { code: "BIF", nameC: "Burundian Franc" },
  { code: "BMD", nameC: "Bermudan Dollar" },
  { code: "BND", nameC: "Brunei Dollar " },
  { code: "BOB", nameC: "Bolivian Boliviano" },
  { code: "BRl", nameC: "Brazilian Real" },
  { code: "BSD", nameC: "Bahamian Dollar" },
  { code: "BTC", nameC: "Bitcoin" },
  { code: "BTN", nameC: "Bhitanese Ngultrum" },
  { code: "BWP", nameC: "Botswanan Pula" },
  { code: "BYN", nameC: "Belarusian Ruble" },
  { code: "BZD", nameC: "Belize Dollar" },
  { code: "CAD", nameC: "Canadian Dollar" },
  { code: "CDF", nameC: "Congolese Franc" },
  { code: "CLF", nameC: "Chilean Unit of Account (UF)" },
  { code: "CLP", nameC: "Chilean Peso" },
  { code: "CNH", nameC: "Chinese Yuan (Offshore)" },
  { code: "CNY", nameC: "Chinese Yuan" },
  { code: "COP", nameC: "Colombian Peso" },
  { code: "CRC", nameC: "Costa Rican Colón" },
  { code: "CUC", nameC: "Cuban Convertible Peso" },
  { code: "CUP", nameC: "Cuban Peso" },
  { code: "CVE", nameC: "Cape Verdean Escudo" },
  { code: "CZK", nameC: "Czech Republic Koruna" },
  { code: "DJF", nameC: "Djiboutian Franc" },
  { code: "DKK", nameC: "Danish Krone" },
  { code: "DOP", nameC: "Dominican Peso" },
  { code: "DZD", nameC: "Algerian Dinar" },
  { code: "EGP", nameC: "Egyptian Pound" },
  { code: "ERN", nameC: "Eritrean Nakfa" },
  { code: "ETB", nameC: "Ethiopian Birr" },
  { code: "FJD", nameC: "Fijian Dollar" },
  { code: "FKP", nameC: "Falkland Islands Pound" },
  { code: "GEL", nameC: "Georgian Lari" },
  { code: "GGP", nameC: "Guernsey Pound" },
  { code: "GHS", nameC: "Ghanaian Cedi" },
  { code: "GIP", nameC: "Gibraltar Pound" },
  { code: "GMD", nameC: "Gambian Dalasi" },
  { code: "GNF", nameC: "Guinean Franc" },
  { code: "GTQ", nameC: "Guatemalan Quetzal" },
  { code: "GYD", nameC: "Guyanaese Dollar" },
  { code: "HKD", nameC: "Hong Kong Dollar" },
  { code: "HNL", nameC: "Honduran Lempira" },
  { code: "HRK", nameC: "Crotatian Kuna" },
  { code: "HTG", nameC: "haitian Gourde" },
  { code: "HUF", nameC: "Hungarian Forint" },
  { code: "IDR", nameC: "Indonesian Rupiah" },
  { code: "ILS", nameC: "Israeli New Sheqel" },
  { code: "IMP", nameC: "Manx pound" },
  { code: "INR", nameC: "Indian Rupee" },
  { code: "IQD", nameC: "Iraqi Dinar" },
  { code: "IRR", nameC: "Iranian Rial" },
  { code: "ISK", nameC: "Icelandic Króna" },
  { code: "JEP", nameC: "Jersey Pound" },
  { code: "JMD", nameC: "Jamaican Dollar" },
  { code: "JOD", nameC: "Jordanian Dinar" },
  { code: "KES", nameC: "Kenyan Shiling" },
  { code: "KGS", nameC: "Kyrgystani Som" },
  { code: "KHR", nameC: "Cambodian Riel" },
  { code: "KMF", nameC: "Comorian Franc" },
  { code: "KPW", nameC: "North Korean Won" },
  { code: "KRW", nameC: "South Korean Won" },
  { code: "KWD", nameC: "Kuwaiti Dinar" },
  { code: "KYD", nameC: "Cayman Islands Dollar" },
  { code: "KZT", nameC: "Kazakhstani Tenge" },
  { code: "LAK", nameC: "Laotian Kip" },
  { code: "LBP", nameC: "Lebanese Pound" },
  { code: "LKR", nameC: "Sri Lankan Rupee" },
  { code: "LRD", nameC: "Liberian Dollar" },
  { code: "LSL", nameC: "Lesotho Loti" },
  { code: "LYD", nameC: "Libyan Dinar" },
  { code: "MAD", nameC: "Morocaan Dirham" },
  { code: "MDL", nameC: "Moldovan Leu" },
  { code: "MGA", nameC: "Malagasy Ariary" },
  { code: "MKD", nameC: "Mecedonian Denar" },
  { code: "MMK", nameC: "Myanma Kyat" },
  { code: "MNT", nameC: "Monogolian Tugrik" },
  { code: "MOP", nameC: "Macanese Pataca" },
  { code: "MRO", nameC: "Mauritanian Ouguiya (pre-2018)" },
  { code: "MRU", nameC: "Mauritanian Ouguiya" },
  { code: "MUR", nameC: "Maurtian Rupee" },
  { code: "MVR", nameC: "Maldivian Rufiyaa" },
  { code: "MWK", nameC: "Malawian Kwacha" },
  { code: "MXN", nameC: "Mexican Peso" },
  { code: "MYR", nameC: "Malaysian Ringgit" },
  { code: "MZN", nameC: "Mozambican Metical" },
  { code: "NAD", nameC: "Namibian Dollar" },
  { code: "NGN", nameC: "Nigerian Naira" },
  { code: "NIO", nameC: "Nicaraguan Córdoba" },
  { code: "NOK", nameC: "Norwegian Krone" },
  { code: "NPR", nameC: "Nepalese Rupee" },
  { code: "NZD", nameC: "New Zealand Dollar" },
  { code: "OMR", nameC: "Omani Rial" },
  { code: "PAB", nameC: "Panamanian Balboa" },
  { code: "PEN", nameC: "Peruvian Nuevo Sol" },
  { code: "PGK", nameC: "Papua New Guinean Kina" },
  { code: "PHP", nameC: "Philippine Peso" },
  { code: "PKR", nameC: "Pakistani Rupee" },
  { code: "PLN", nameC: "Polish Zloty" },
  { code: "PYG", nameC: "Paraguayan Guarani" },
  { code: "QAR", nameC: "Qatari Rial" },
  { code: "RON", nameC: "Romanian Leu" },
  { code: "RSD", nameC: "Serbian Dinar" },
  { code: "RUB", nameC: "Russian Ruble" },
  { code: "RWF", nameC: "Rwandan Franc" },
  { code: "SAR", nameC: "Saudi Rival" },
  { code: "SBD", nameC: "Solomon Islands Dollar" },
  { code: "SCR", nameC: "Seychellois Rupee" },
  { code: "SDG", nameC: "Sudanese Pound" },
  { code: "SEK", nameC: "Swedish Krona" },
  { code: "SGD", nameC: "Singapore Dollar" },
  { code: "SHP", nameC: "Saint Helena Pound" },
  { code: "SLL", nameC: "Sierra Leonean Leone" },
  { code: "SOS", nameC: "Somali Shilling" },
  { code: "SRD", nameC: "Surinamese Dollar" },
  { code: "SSP", nameC: "South Sudanese Pound" },
  { code: "STD", nameC: "São Tomé and Príncipe Dobra (pre-2018)" },
  { code: "STN", nameC: "São Tomé and Príncipe Dobra" },
  { code: "SVC", nameC: "Salvadoran Colón" },
  { code: "SYP", nameC: "Syrian Pound" },
  { code: "SZL", nameC: "Swazi Lilangeni" },
  { code: "THB", nameC: "Thai Baht" },
  { code: "TJS", nameC: "Tajikistani Somoni" },
  { code: "TMT", nameC: "Turkmenistani Manat" },
  { code: "TND", nameC: "Tunisian Dinar" },
  { code: "TOP", nameC: "Tongan Pa'anga" },
  { code: "TRY", nameC: "Turkish Lira" },
  { code: "TTD", nameC: "Trindad and Tobago Dollar" },
  { code: "TWD", nameC: "New Taiwan Dollar" },
  { code: "TZS", nameC: "Tanzanian Shilling" },
  { code: "UAH", nameC: "Ukrainian Hryvnia" },
  { code: "UGX", nameC: "Ugandan Shilling" },
  { code: "UYU", nameC: "Uruguayan Peso" },
  { code: "UZS", nameC: "Uzbekistan Som" },
  { code: "VEF", nameC: "Venezuelan Bolívar Fuerte (Old)" },
  { code: "VES", nameC: "Venezuelan Bolívar Soberano" },
  { code: "VND", nameC: "Vietnamese Dong" },
  { code: "VUV", nameC: "Vanuatu Vatu" },
  { code: "WST", nameC: "Samoan Tala" },
  { code: "XAF", nameC: "CFA Franc BEAC" },
  { code: "XAG", nameC: "Silver Ounce" },
  { code: "XAU", nameC: "Gold Ounce" },
  { code: "XCD", nameC: "East Caribbean Dollar" },
  { code: "XDR", nameC: "Special Drawing Rights" },
  { code: "XOF", nameC: "CFA Franc BCEAO" },
  { code: "XPD", nameC: "Palladium Ounce" },
  { code: "XPF", nameC: "CFP Franc" },
  { code: "XPT", nameC: "Platinum Ounce" },
  { code: "YER", nameC: "Yemeni Rial" },
  { code: "ZAR", nameC: "South African Rand" },
  { code: "ZMW", nameC: "Zambian Kwacha" },
  { code: "ZWL", nameC: "Zimbabwean Dollar" },
];

const appId = "2fb30b4e6ff34fed962b343830bf09e1";
const twelvedataAppId = "37679fd95e8b4db69d4e464f3991b8a5";

// Logic to handle currency data once fetched
const handleCurrencyData = (event) => {
  var date = $(".dateInput").val();
  console.log(date);
  var comparisonCurrency = $("#exchangeRateOptions").val();
  console.log(comparisonCurrency);
  function submit() {
    //create populate append list item
    $("#currencyView").append(
      `<li id=list-item>Currency: ${comparisonCurrency}</li>`
    );
  }
  console.log(event);
  submit();
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

// getCurrencies(sampleDates[2], sampleCurrencies[3]);
// getStocks(sampleTickerSymbols[3]);

//EVENT HANDLERS
$("#save-btn").on("click", handleCurrencyData);
currencies.forEach(function (currency) {
  addOption(currency.code, currency.nameC);
});

$("#save-btn").on("click", handleCurrencyData);

// Leave commented to keep api request rates low
// (should be triggered by a button click really anyways)
// getCurrencies(sampleDates[2], sampleCurrencies[3]);
// getStocks(sampleTickerSymbols[3]);

function btnGetQuote_Click() {
    if (validateQuote()) {
        saveQuoteData();
        resetQuoteForm();
        window.location.href = "#pgDisplay";
    }
}

function btnClearDatabase_Click() {
   if (confirm("Are you sure you want to clear the database?")) {
       localStorage.clear();
       initDB();
       alert("Database cleared.");
   }
}

function pgFind_Show() {
    displayAllQuotes();
}

function pgDisplay_Show() {
    displayLastQuote();
}

function initDB() {
    if (localStorage.getItem("quoteCounter") === null) {
        localStorage.setItem("quoteCounter", "0");
    }
    if (localStorage.getItem("selectedQuoteId") === null) {
        localStorage.setItem("selectedQuoteId", "");
    }
}

function init() {
    $("#btnGetQuote").on("click", btnGetQuote_Click);
    $("#btnClearDatabase").on("click", btnClearDatabase_Click);
    $("#pgFind").on("pageshow", pgFind_Show);
    $("#pgDisplay").on("pageshow", pgDisplay_Show);
}

$(document).ready(function () {
    init();
    initDB();
    console.info("DOM is ready.");
});

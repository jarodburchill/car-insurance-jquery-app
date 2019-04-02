function displayAllQuotes() {
    var htmlCode = "";
    var numberOfQuotes = Number(localStorage.getItem("quoteCounter"));

    for (var i = 0; i < numberOfQuotes; i++) {
        var quote = JSON.parse(localStorage.getItem("quote_" + i));

        htmlCode += "<li>" +
            "<a data-role='button' data-row-id=" + "quote_" + i + " href='#pgDisplay'>" +
            "<h1>Name: " + quote.name + "</h1>" +
            // "<p>Address: " + quote.address + "</p>" +
            // "<p>City: "+ quote.city +"</p>" +
            // "<p>Phone Number: "+ quote.phone +"</p>" +
            // "<p>Email Address: "+ quote.email +"</p>" +
            "<p>Vehicle Make: "+ quote.make +"</p>" +
            "<p>Vehicle Model: "+ quote.model +"</p>" +
            "<p>Vehicle Year: "+ quote.year +"</p>" +
            "</a>" +
            "</li>";
    }
    var list = $("#lvAllQuotes");
    list = list.html(htmlCode);
    list.listview("refresh");

    function clickHandler() {
        localStorage.setItem("selectedQuoteId", $(this).attr("data-row-id"));
    }

    $("#lvAllQuotes a").on("click", clickHandler);
}

function displayLastQuote() {
    var htmlCode = "";
    var lastQuoteId = localStorage.getItem("selectedQuoteId");
    var quote = JSON.parse(localStorage.getItem(lastQuoteId));

    htmlCode += "<li>" +
        "<h1>Personal Information:</h1>" +
        "<p>Name: " + quote.name + "</p>" +
        "<p>Address: " + quote.address + "</p>" +
        "<p>City: "+ quote.city +"</p>" +
        "<p>Phone Number: "+ quote.phone +"</p>" +
        "<p>Email Address: "+ quote.email +"</p><br>" +
        "<h1>Vehicle Information:</h1>" +
        "<p>Vehicle Make: "+ quote.make +"</p>" +
        "<p>Vehicle Model: "+ quote.model +"</p>" +
        "<p>Vehicle Year: "+ quote.year +"</p><br>" +
        "<h1>Insurance Quote:</h1>" +
        "<p>Business logic feature in construction</p>" +
        "</h1>" +
        "<li>" +
        "<a target=\"_blank\" href='https://www.jdpower.com/Cars/" + quote.year +"/" + quote.make + "/" + quote.model + "'>JD Power Link</a>" +
        "</li>" +
        "<li>" +
        "<a href='#pgHome'>Back to Home Page</a>" +
        "</li>";
    var list = $("#lvLastQuote");
    list = list.html(htmlCode);
    list.listview("refresh");
}

function saveQuoteData(){
    var numberOfQuotes = Number(localStorage.getItem("quoteCounter"));
    var quoteId = "quote_" + numberOfQuotes.toString();

    var quoteObject = {
        name:$("#txtName").val(),
        address:$("#txtAddress").val(),
        city:$("#txtCity").val(),
        phone:$("#txtPhone").val().replace(/\D/g,''),
        email:$("#txtEmail").val(),
        make:$("#txtMake").val(),
        model:$("#txtModel").val(),
        year:$("#txtYear").val()
    };

    var quoteJSON = JSON.stringify(quoteObject);

    localStorage.setItem(quoteId, quoteJSON);
    localStorage.setItem("selectedQuoteId", quoteId);

    numberOfQuotes++;
    localStorage.setItem("quoteCounter", numberOfQuotes.toString());
}



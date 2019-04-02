function validateQuote() {
    var form = $("#frmAdd");
    form.validate({
        rules: {
            txtName: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            txtAddress: {
                required: true,
                minlength: 5,
                maxlength: 30
            },
            txtCity: {
                required: true,
                minlength: 3,
                maxlength: 20
            },
            txtPhone: {
                required: true,
                phone: true
            },
            txtEmail: {
                required: true,
                email: true
            },
            txtMake: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            txtModel: {
                required: true,
                maxlength: 30
            },
            txtYear: {
                required: true,
                year: true
            }
        }
    });
    return form.valid();
}

$.validator.addMethod('phone', function (value) {
    var regex = /^([(]\d{3}[)]\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/;
    //var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return regex.test(value);
}, "Please enter a valid phone number.");

$.validator.addMethod('year', function (value) {
    var regex = /^(19[5-9]\d|20[0-4]\d|2020)$/;
    return regex.test(value);
}, "Please enter a valid year (1950-2020).");

function resetQuoteForm() {
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtCity").val("");
    $("#txtPhone").val("");
    $("#txtEmail").val("");
    $("#txtMake").val("");
    $("#txtModel").val("");
    $("#txtYear").val("");
}
$(document).ready(function() {

    let a = $('#step1');
    let b = $('#step2');
    let c = $('#step3');
    let d = $('#step4');

    // function alert(){
    //     swal({
    //         title: "Congratulations!",
    //         text: "Your application is successful",
    //         icon: "success"
    //     });
    // }is not been called any where that's why.

    $("#button").click(function() {

        let emailAddress = $('#emailAddress').val();
        let fullName = $('#fullName').val();
        let phoneNumber = $('#phoneNumber').val();
        let numbers = /^\+?\d+$/;
        let name = /^[a-zA-Z\s]+$/;
        let email = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

        if (emailAddress !== '' && fullName !== '' && phoneNumber !== '') {
            let hasnumbers = numbers.test(phoneNumber);
            let hasname = name.test(fullName);
            let hasgmail = email.test(emailAddress);

            if (hasnumbers && hasname && hasgmail) {
                a.css('display', 'none')
                b.css('display', 'block')

            } else {
                let Err = "<b class='alert alert-danger'>"
                if (!hasname) {
                    Err += "full name is incorrect";
                } else if (!hasnumbers) {
                    Err += "Phone number is not correct ";
                } else if (!hasgmail) {
                    Err += "Email address is incorrect";
                } else if (hasnumbers.length <= 14) {
                    Err += "Phone number is less than 10 charcters";
                } else {
                    Err += "Invalid inputs in your </b>"
                }

                $("#alertMessage1").html(Err);
                // window.setTimeout(function() {
                //     $("#alertMessage1").fadeTo(200, 0).slide(200, function(){
                //     $(this).remove(); 
                //      });
                //      }, 4000);
            }
        } else {
            $("#alertMessage1").html("<b class='alert hide alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
            window.setTimeout(function() {
                $(".hide").fadeTo(200, 0).slideDown(200, function(){
                $(this).remove(); 
                 });
                 }, 4000);
        }
    });

    // step 2 vadilation 
    $("#button2").click(function() {
        let IDnumber = $("#IDnumber").val();
        let Date = $("#date").val();
        let Gender = $("#Gender").val();

        if (IDnumber !== '' && Date !== '' && Gender !== '') {
            if (b.css("display") == "block" && IDnumber.length >= 8) {
                b.css("display", "none");
                c.css("display", "block");
            } else {
                $("#alertMessage2").html("<b class='alert alert-danger'>Id number is incorrect must be at least 8 ! 😒</b>");
                window.setTimeout(function() {
                    $("#alertMessage2").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove(); 
                     });
                     }, 4000);
            }
        } else {
            $("#alertMessage2").html("<b class='alert hide alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
            window.setTimeout(function() {
                $(".hide").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
                 });
                 }, 4000);
        }

    });

    //step 3 validation 
    $("#button3").click(function() {
        let country = $('#country').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val()
        let UpperCase = /.*[A-Z]/;
        let LowerCase = /.*[a-z]/;
        let NumericValue = /.*[0-9]/;
        let Symbol = /.*[!@#$%^&*]/;

        if (country !== '' && password !== '' && confirmPassword !== '') {
            let hasUpperCase = UpperCase.test(password);
            let hasLowerCase = LowerCase.test(password);
            let hasNumericValue = NumericValue.test(password);
            let hasSymbol = Symbol.test(password);

            if (hasUpperCase && hasLowerCase && hasNumericValue && hasSymbol && password === confirmPassword && password.length >= 6 && c.css("display") == "block") {
                    swal({
                        title: "Congratulations!",
                        text: "Your application is successful",
                        icon: "success"
                    });
                  
                     c.css('display', "none");
                     // d.css('display', "block");
                     // return true;
            } else {
                let errorMessge = "<b class='alert alert-danger'>";
                if (password.length < 6) {
                    errorMessge += "Password must be at least 6 characters";
                } else if (password != confirmPassword) {
                    // errorMessge += "Passwords do not match";
                    swal({
                        title: "Match error",
                        text: "Passwords do not match",
                        icon: "error"
                    });
            
                } else if (!hasUpperCase || hasUpperCase.length < 2) {
                    errorMessge += "Uppercase letters is less than 2 characters";

                } else if (!hasLowerCase || hasLowerCase.length < 2) {
                    errorMessge += "Passowrd Has No Lowercase Character(2)";

                } else if (!hasNumericValue || hasNumericValue.length < 2) {
                    errorMessge += "Passowrd Has No Numeric Value Character(2)";

                } else if (!hasSymbol || hasSymbol.length < 2) {
                    errorMessge += "Passowrd Has No symbols Characte(h2)";
                } else {
                    errorMessge += "An Error Occured Kindly Refresh Your Browser And Try again </b>";
                }




                $("#alertMessage3").html(errorMessge);
                // return false;

                 window.setTimeout(function() {
                    $("#alertMessage3").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove(); 
                     });
                     }, 4000);
            }
        } else {
            $("#alertMessage3").html("<b class='alert hide alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
            window.setTimeout(function() {
                $(".hide").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
                 });
                 }, 4000);
        }

//remeber for the fadeout function we can still call a different class which is not in use ie alert dog or alert cat.

    });
    
});


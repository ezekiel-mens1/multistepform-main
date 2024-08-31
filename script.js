// let emailAddress, fullName, phoneNumber, IDnumber, Genders, dates, country, password, confirmPassword;

// // Step 1 validation
// function heyme() {
//     let a = document.getElementById('step1');
//     let b = document.getElementById('step2');
//     let c = document.getElementById('step3');

//     // Update the variables
//     emailAddress = document.getElementById('emailAddress').value;
//     fullName = document.getElementById('fullName').value;
//     phoneNumber = document.getElementById('phoneNumber').value;

//     if (emailAddress !== '' && fullName !== '' && phoneNumber !== '') {
//         if (b.style.display === "none") {
//             a.style.display = "none";
//             b.style.display = "block";
//             c.style.display = "none";
//         }
//     } else {
//         document.getElementById("alertMessage1").innerHTML = "<b class='alert alert-danger'>Kindly Fill All Fields ! 😒</b>";
//         console.log(fullName);
//     }
// }

// // Step 2 validation
// function heyme2() {
//     let a = document.getElementById('step1');
//     let b = document.getElementById('step2');
//     let c = document.getElementById('step3');

//     // Update the variables
//     IDnumber = document.getElementById('IDnumber').value;
//     Genders = document.getElementById('Gender').value;
//     dates = document.getElementById('date').value;

//     if (IDnumber !== '' && Genders !== '' && dates !== '' && IDnumber.length > 10) {
//         if (b.style.display === "block") {
//             a.style.display = "none";
//             b.style.display = "none";
//             c.style.display = "block";
//         }
//     } else {
//         document.getElementById("alertMessage2").innerHTML = "<b class='alert alert-danger'>Kindly Fill All Fields 2 ! 😒</b>";
//         document.getElementById("alertMessage2").innerHTML = "<b class='alert alert-danger'>Id number is incorrect  😒</b>";
//     }
// }

// // Step 3 validation
// function heyme3() {
//     let a = document.getElementById('step1');
//     let b = document.getElementById('step2');
//     let c = document.getElementById('step3');
//     let d = document.getElementById('step4');

//     // Update the variables
//     country = document.getElementById("country").value;
//     password = document.getElementById("password").value;
//     confirmPassword = document.getElementById("confirmPassword").value;
 
//     if (country !== "" && password !== "" && confirmPassword !== "" ) {
//         if (c.style.display === "block" && password === confirmPassword  ) {
//             a.style.display = "none";
//             b.style.display = "none";
//             c.style.display = "none";
//             d.style.display = "block";
//             // console.log(emailAddress, fullName, phoneNumber, IDnumber, Genders, dates, country, password, confirmPassword);
//             document.getElementById("FullNameValue").innerHTML = "<b> Full Name: " + fullName + "</b>";
//             document.getElementById("emailv").innerHTML = "<b> Email Address: " + emailAddress + "</b>";
//             document.getElementById("phonev").innerHTML = "<b> Phone Number: " + phoneNumber + "</b>";
//             document.getElementById("Idnumberv").innerHTML = "<b> IDNumber: " +  IDnumber + "</b>";
//             document.getElementById("datev").innerHTML = "<b> Date of birth: " +   dates + "</b>";
//             document.getElementById("genderv").innerHTML = "<b> Sex: " +   Genders + "</b>";
//             document.getElementById("countryv").innerHTML = "<b> Country: " +  country + "</b>";
//             document.getElementById("passwordv").innerHTML = "<b> Password: " +  password + "</b>";
            

            
//         } else {
//             console.log("passwords do not match");
//             document.getElementById("alertMessage3").innerHTML = "<b class='alert alert-danger'>Passwords do not match ! 😒</b>";
//         }
//     } else {
//         document.getElementById("alertMessage3").innerHTML = "<b class='alert alert-danger'>Kindly Fill All Fields 3 ! 😒</b>";
//     }
// }

// jequery 

    $(document).ready(function(){
      
        let a =$('#step1');
        let b =$('#step2');
        let c = $('#step3');
        let d = $('#step4');

        $("#button").click(function(){

          let emailAddress= $('#emailAddress').val();
          let fullName= $('#fullName').val();
          let phoneNumber= $('#phoneNumber').val();
          let numbers = /^\+?\d+$/;
          let name = /^[a-zA-Z\s]+$/;
          let email = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

          if(emailAddress !=='' && fullName !=='' && phoneNumber !==''){
            let hasnumbers = numbers.test(phoneNumber);
            let hasname = name.test(fullName);
            let hasgmail = email.test( emailAddress);
            if(hasnumbers && hasname && hasgmail && b.css('display')==='none'){
                a.css('display', 'none')
                b.css('display','block')
              
            }
          } else{
            $("#alertMessage1").html("<b class='alert alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
          } 
        });

        // step 2 vadilation 
        $("#button2").click(function(){
          let IDnumber= $("#IDnumber").val();
          let Date= $("#date").val();
          let Gender= $("#Gender").val();

        if(IDnumber !=='' && Date !==''&& Gender !==''){
          if(b.css("display")=="block" && IDnumber.length >=8){
            b.css("display","none");
            c.css("display","block");
          }else{
            $("#alertMessage2").html("<b class='alert alert-danger'>Id number is incorrect must be at least 8 ! 😒</b>");
          }
        }else{
          $("#alertMessage2").html("<b class='alert alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
        }

        });

        //step 3 validation 
        $("#button3").click(function(){
          let country =$('#country').val();
          let password = $('#password').val();
          let confirmPassword = $('#confirmPassword').val();
          // let paswd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
          let hasUpperCase = /.*[A-Z]/;
          let hasLowerCase = /.*[a-z]/;
          let hasNumericValue = /.*[0-9]/;
          let hasSymbol = /.*[!@#$%^&*]/;
          
          if (country !== '' && password !== '' && confirmPassword !== '') {
            if (!paswd.test(password)) {
              $("#alertMessage3").html("<b class='alert alert-danger'>Passwords must at least contain symbols! 😒</b>");
            } else if (c.css('display') == 'block' && confirmPassword === password && password.length >= 6) {
              c.css('display', 'none');
              d.css('display', 'block');
              $("#alertMessage3").html("<b class='alert alert-success'>Password is valid! 😊</b>");
            } else {
              
              $("#alertMessage3").html("<b class='alert alert-danger'>Passwords do not match or are less than 6 characters! 😒</b>");
            }
          } else {
            $("#alertMessage3").html("<b class='alert alert-danger'>Kindly Fill All Fields 3! 😒</b>");
          }
          

        //   if(country !=='' && password !=='' && confirmPassword !==''){
            
        //     if(c.css('display')=='block' && confirmPassword===password  && password.length >=6 && paswd.test(password)){
        //       c.css('display', 'none');
        //       d.css('display', "block");
        //     } 
        //     else{
        //       $("#alertMessage3").html("<b class='alert alert-danger'>Passwords do match !  😒</b>");
        //     }
            
        //   }else{
        //     $("#alertMessage3").html("<b class='alert alert-danger'>Kindly Fill All Fields 3 ! 😒</b>");
        //   }
        // });


      });
    });

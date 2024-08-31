    <?php 
    $conn = new mysqli('localhost','root','','loginform');

    if($conn-> connect_error)
        echo"Bad Connection!!";
        die('Connection Failed :'.$conn ->connect_error);

    if(isset($_POST['submit'])){
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $IDnumber = $_POST['IDnumber'];
    $Date = $_POST['date'];
    $country = $_POST['country'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];
    // $Gender= $_POST['Gender'];
    //inserting into the database
    if($password!=$confirmpassword){
        $bad=4;
        echo'password does not match ';
    } 
    else{
    $q="INSERT INTO forms (fullName,email,phoneNumber,IDnumber,date,country,password,) VALUES ('$fullName','$email','$phoneNumber','$IDnumber','$date','$country','$password')";

    // $functioninsert= mysqli_query($q,$conn);
    // if ($functioninsert===True){
    //     echo"registration sucessfull";
    // }

        // $stmt = $conn->prepare("insert into loginform(fullName,email,phoneNumber,IDnumber,date,country,password)
        //   values(?,?,?,?,?,?)");
        //   $stmt ->bind_param("sssssi",$fullName,$email,$phoneNumber,$date,$country,$password);
        //   $stmt ->execute();
        //   echo "registration successfully";
        //   $stmt ->close();
        //   $conn ->close();

    }
    }
    ?>
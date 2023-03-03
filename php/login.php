<?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "abc";
    $dbname = "students_records";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);


    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        $email = $_GET['email'];
        $password = $_GET['password'];

        $sql = "SELECT * FROM students WHERE `email`= '$email' AND `password` = '$password'";

        if ($result = $conn->query($sql)) {
            $row = $result -> fetch_assoc();
            echo json_encode($row);

        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
?>
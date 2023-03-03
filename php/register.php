<?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "abc";
    $dbname = "students_records";

    $conn = new mysqli($servername, $username, $password, $dbname);


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        $id = $_GET['id'];
        $name = $_GET['name'];
        $email = $_GET['email'];
        $password = $_GET['password'];

        $sql = "INSERT INTO students (`id`, `name`, `email`, `password`)
        VALUES ($id, '$name', '$email', '$password')";

        if (mysqli_query($conn, $sql)) {
            echo true;
        }
    }
?>
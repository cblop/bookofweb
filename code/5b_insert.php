<html>
<head><title>PHP and MySQL</title></head>
    <body>
    
        <?php
        $host = "localhost";
        $username = "matty";
        $password = "password";
        $db = "tinder";
        
        $connection = mysqli_connect($host, $username, $password, $db);
        
        if($connection === false) {
            die("ERROR: Could not connect." . mysqli_connect_error());
        }
        
        echo "Connection successful<br>";
        
        $name = $_GET['name'];
        $height = $_GET['height'];
        $weight = $_GET['weight'];
        $sex = $_GET['sex'];A
        
        $sql = "INSERT INTO user (name, sex, height, weight) VALUES ('$name', '$sex', $height, $weight);";
        
        if(mysqli_query($connection, $sql)) {
            echo "Table successfully created";
        } else {
            echo "ERROR: Could not execute $sql. " . mysqli_error($connection);
        }
        
        mysqli_close($connection);
            
        ?>
    
    </body>
</html>
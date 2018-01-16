<html>
<head><title>PHP and MySQL</title></head>
    <body>
    
        <?php
        $host = "localhost";
        $username = "matty";
        $password = "password";
        
        $connection = mysqli_connect($host, $username, $password);
        
        if($connection === false) {
            die("ERROR: Could not connect." . mysqli_connect_error());
        }
        
        echo "Connection successful<br>";
        
        $sql = "CREATE DATABASE tinder;";
        
        if(mysqli_query($connection, $sql)) {
            echo "Database successfully created";
        } else {
            echo "ERROR: Could not execute $sql. " . mysqli_error($connection);
        }
        
        mysqli_close($connection);
            
        ?>
    
    </body>
</html>
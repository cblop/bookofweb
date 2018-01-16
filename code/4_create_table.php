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
        
        $sql = "CREATE TABLE user (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255),
            sex ENUM('m', 'f'),
            height INT,
            weight INT,
            hair_colour VARCHAR(255),
            date_of_birth DATE,
            interests TEXT,
            photo VARCHAR(255),
            PRIMARY KEY(ID)
        );";
        
        if(mysqli_query($connection, $sql)) {
            echo "Table successfully created";
        } else {
            echo "ERROR: Could not execute $sql. " . mysqli_error($connection);
        }
        
        mysqli_close($connection);
            
        ?>
    
    </body>
</html>
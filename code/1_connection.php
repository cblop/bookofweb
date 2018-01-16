<html>
<head><title>PHP and MySQL</title></head>
    <body>
    
        <?php
        $host = "localhost";
        $username = "matty";
        $password = "password";
        $db = "murder";
        
        $connection = mysqli_connect($host, $username, $password, $db);
        
        if($connection === false) {
            die("ERROR: Could not connect." . mysqli_connect_error());
        }
        
        echo "Connection successful";
            
        ?>
    
    </body>
</html>
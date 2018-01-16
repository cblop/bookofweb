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
        
        echo "Connection successful<br>";
        
        $sql = "SELECT * FROM suspect;";
        
        if($result = mysqli_query($connection, $sql)) {
            if(mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_array($result)) {
                    echo $row['name'] . "<br>";
                }
            }
        }
        
        mysqli_close($connection);
            
        ?>
    
    </body>
</html>
<html>
<head><title>Dating Form</title></head>

    <body>
    
        <form action="insert.php">
        Name:<br><input type="text" name="name"><br>
        Weight:<br><input type="text" name="weight"><br>
        Sex:<br><input type="text" name="sex"><br>
        Height:<br><input type="text" name="height"><br>
            <input type="submit" name="submit">
        </form>
    </body>
    
    
    <!-- inside insert.php, use $_GET['name'] to get the name, etc -->
    
</html>
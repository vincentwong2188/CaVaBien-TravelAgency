
<html>

<body>


<h1>Below are your flight details:</h1>
    <p >
    You are flying from <?php echo htmlentities($_POST['startlocation']); ?> to <?php echo htmlentities($_POST['endlocation']); ?> on <?php echo htmlentities($_POST['startdate']); ?> to and returning on <?php echo htmlentities($_POST['enddate']); ?>
    </p>


</body>
</html>

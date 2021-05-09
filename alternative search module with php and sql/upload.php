<?php
	$from=$_FILES["file"]["tmp_name"];
	$to="images/".basename($_FILES["file"]["name"]);
	$imageFileType = pathinfo($to, PATHINFO_EXTENSION);
	$uploadsuccess=1;
	
	//check if the "upload" variable is set
	if(isset($_POST["upload"])){
		//check if the file is true or false image
		$check = getimagesize($from);
		if($check !== false){
			$uploadsuccess=1;
		}
		else{
			$uploadsuccess=0;
		}
	}
		// Check if file already exists
	if (file_exists($to)) {
			$uploadsuccess=0;
	}
		// Check file size
	if ($_FILES["file"]["size"] > 5000000) {
			 $uploadsuccess=0;
	}
		// check file formats
	if($imageFileType != "jpg" &&  $imageFileType != "png" && $imageFileType != "jpeg"&& $imageFileType != "gif" ){
			  $uploadsuccess=0;
	}
	if($uploadsuccess==0){
		echo 0;
	}else{
		  // upload file and connect database to upload file name to database relevant table column.
		if(move_uploaded_file($from, $to)){	
			echo 1;
			$servername = "localhost:3307";
			$username = "root";
			$password = "1234";
			$dbname = "davidlaptop";				
			$conn = new mysqli($servername, $username, $password, $dbname);				
			if ($conn->connect_error){
				die("Connection failed: " . $conn->connect_error);				
			}
			$sql = "insert into products (spic)
			values ('%$to%')";
			$conn->query($sql);
			$conn->close();
		}
		else{
			echo 0;
		}
	}	
?>
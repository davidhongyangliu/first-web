	<?php	
				$servername = "localhost:3307";
				$username = "root";
				$password = "1234";
				$dbname = "davidlaptop";
				$userInput=$_POST['search'];				
				$conn = new mysqli($servername, $username, $password, $dbname);				
				if ($conn->connect_error){
					die("Connection failed: " . $conn->connect_error);				
				}
				$sql = "SELECT * from products WHERE upper(brand) like upper('%$userInput%') or upper(name) like upper('%$userInput%') or upper(description) like upper('%$userInput%')";
				$result = $conn->query($sql);
				$searchRst=$result->fetch_all(MYSQLI_ASSOC);
				$result->free_result();
				echo json_encode($searchRst);
				$conn->close();
				
				?>
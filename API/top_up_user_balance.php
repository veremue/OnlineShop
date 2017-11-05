<?php
 include "db.php";
 //echo 'we are in';
 if(isset($_POST['insert']))
 {
 $comment=$_POST['comment'];
 $user=$_POST['user'];
 $ip=$_POST['ip'];
 $q=mysqli_query($con,"INSERT INTO `fanzone_table` (`comment`,`user`,`ip`) VALUES ('$comment','$user','$ip')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>
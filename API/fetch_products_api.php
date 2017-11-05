<?php
include "db.php";
$data=array();
$q=mysqli_query($con,"select comment,user,post_time from fanzone_table");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>
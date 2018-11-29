<?php
$n = 153;
$res = flower($n);
var_dump($res);
function flower($n){
	//定义 变量
	$num = '';
	$g = floatval($n%10%100);
	$s = floatval($n/10%10);
	$b = floatval($n/100%10);

	$num = pow($g,3) + pow($s,3) + pow($b,3);

	if($num == $n){
		return true;
	}else{
		return false;
	}
}
<?php

NumberOf1(11);
function NumberOf1($n) {
	$num = 0;
	while($n){
		if($n%2==1){
			$num++;
		}
		$n = floor($n/2);
	}
	echo $num;
}
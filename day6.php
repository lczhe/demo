<?php

$res = calFn(1,13);
var_dump($res);

//定义函数

function calFn($n,$m)
{
	//定义变量
	$num = 0;
	for($i=$n;$i<=$m;$i++){
		$number = $i;
		//循环 当前值
		while($number){
			if($number%10 == 1){
				$num ++;
			}
			$number = $number/10;
		}
	}
	return $num;
}
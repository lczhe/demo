<?php
	$res = dailyOne(26);
	var_dump($res);
function GetUglyNumber_Solution($index){
	if($index == 0) return 'no';
	if($index == 1) return 'yes';

	$num = $index;
	while($num % 2 ==0){
		$num = $num/2;
	}
	while($num % 3 ==0){
		$num = $num/3;
	}
	while($num % 5 ==0){
		$num = $num/5;
	}

	if($num == 1){
		return 'yes';
	}else{
		return 'no';
	}

}

function dailyOne($num){
	if($num == 0){
		return 0;
	}
	if($num % 2 ==0 ){
		return dailyOne($num/2);
	}
	if($num % 3 == 0){
			return dailyOne($num/3);
	}
	if($num % 5 == 0){
		return dailyOne($num/5);
	}

	if($num == 1){
		return 'yes';
	}else{
		return 'no';
	}
	
}
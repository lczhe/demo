<?php 

class contro{
	//递归
	static function getOn($n){
		if($n==1 || $n==2) return 1;
		return self::getOn($n-1) + self::getOn($n-2);
	}
	static function getTwo($n){
		$arr = [];
		for($i=0;$i<$n;$i++){
			if($i == 0 || $i == 1){
				$arr[]=1;
				continue;
			}
			$arr[] = $arr[$i-1] + $arr[$i-2];
		}
		$res = implode(' ', $arr);
		return $res;
	}

}

$contro = new contro();

$res = $contro::getOn(10);
var_dump($res);

//递归来进行 菲波那切数列  会效率会更慢 数量越大 计算越慢 
//非递归 进行  会让数据 更加快速的出来
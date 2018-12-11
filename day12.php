<?php
var_dump(Sum_Solution(100));
function Sum_Solution($n)
{
	$res= $n;
	$n!=1 && $res= $n+Sum_Solution($n-1);
	return $res;
}
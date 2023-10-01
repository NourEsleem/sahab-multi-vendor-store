<?php
class Testsum{
public $num1 = 25;   
public $num2 = 25;
 function sum(){
    return $this->num1 + $this->num2;
 }

}
$result = new Testsum();
 echo $result->sum();

?>
<?php
$var1 = $_POST['var1'];
$opt = $_POST['operator'];
$result = $_POST['var2'];
if ($result == "") {
    echo $var1;
} else {
    if ($opt == "+") {
        $var1 = $var1 + $result;
    } else if ($opt == "-") {
        $var1 = $var1 - $result;
    } else if ($opt == "*") {
        $var1 = $var1 * $result;
    } else if ($opt == "/") {
        if ($result == 0) {
            $var1 = "";
        } else {
            $var1 = $var1 / $result;
        }
    }
    echo $var1;
}

?>
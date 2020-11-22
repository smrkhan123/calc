var variable1 = "";
var operator = "";
var res="";
$(document).ready(function(){
    $("table tr td").on('click', "#operand", function(){
        var a = $(this).val();
        if(a=="C"){
            $("#demo").html("");
        } else {
            variable1 = variable1+a;
            $("#demo").html(variable1);
        }
    });
});
$(document).ready(function(){
    $("table tr td").on('click', "#operator", function(){
        var oper = $(this).val();
        console.log(oper);
        $.ajax({
            url : "ajax.php",
            type : "POST",
            data : {var1 : variable1, operator : operator, var2 : res}
        }).done(function(result){
                $("#demo").html(result);
                operator = oper;
                variable1 = "";
                res = result;
        });
    });
});
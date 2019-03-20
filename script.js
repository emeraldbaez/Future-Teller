$("button").click(function(){
var name = $(".Answer-to-Future").val();
var graduation = $(".teller").val();
var adjective = $(".future").val();
$(".results").text("Hey " + name+  " you will go to prom in the year of " +graduation+ " and it will be a very " + adjective + " night. ");
});
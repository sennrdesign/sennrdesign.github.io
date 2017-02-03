var Input = document.getElementById("Input");
var Output = document.getElementById("Output");
$('#sendData').click(function(){
  $.getJSON("index.json", function(obj){
    $.each(obj, function(key, value){
      $("#Output").html()
    });
  });
});

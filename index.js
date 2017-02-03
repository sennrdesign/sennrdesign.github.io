var Input = document.getElementById("Input");
var Output = document.getElementById("Output");
$(document).ready(function(){
  $("#sendData").click(function(){
    alert("button clicked");
    $.ajax({
      url:'Trans.json',
      dataType:'json',
      cache:false,
      success:function(data){
        alert(data);
      }
    })
  });
});

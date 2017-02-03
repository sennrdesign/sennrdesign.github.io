var Input = document.getElementById("Input");
var Output = document.getElementById("Output");
$('#sendData').click(function(){
  $.ajax({
    url:"Trans.json",
    dataType:'json',
    type:'get',
    cache:false,
    success:function(data){
      var $object = $(data);
    }
  });
});

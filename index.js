var Input = document.getElementById("Input");
var Output = document.getElementById("Output");
alert("Works");
$("button").click(function(){
  alert("test");
  $.ajax({
    url:"Trans.json",
    dataType:'json',
    type:'get',
    cache:false,
    success:function(data){
      var $object =  $(data);
      alert($object);
    }
  });
});

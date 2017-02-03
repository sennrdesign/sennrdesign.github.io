$(document).ready(function(){
  $("#sendData").click(function(){
    alert("button clicked");
    $.ajax({
      url:'Trans.json',
      dataType:'json',
      cache:false,
      success:function(data){
        $('#Output').html(data[$('#Input').val()]);
      }
    })
  });
});

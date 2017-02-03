$(document).ready(function(){
  $("#sendData").click(function(){
    $.ajax({
      url:'Trans.json',
      dataType:'json',
      cache:false,
      success:function(data){
        var Input = $('#Input').val();
        $('#Output').html(data[Input.toLowerCase()]);
      }
    })
  });
});

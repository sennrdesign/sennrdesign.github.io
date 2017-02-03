$(document).ready(function(){
  $("#sendData").click(function(){
    $.ajax({
      url:'Trans.json',
      dataType:'json',
      cache:false,
      success:function(data){
        var Input = $('#Input').val();
        var DataOutput = data[Input.toLowerCase()];
        if(typeof(DataOutput) == "object"){
          $('#Output').html(DataOutput[0]);
        }else{
          $('#Output').html(DataOutput);
        }
      }
    })
  });
});

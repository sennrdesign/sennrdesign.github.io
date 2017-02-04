$(document).ready(function(){
  $("#sendData").click(function(){
    $.ajax({
      url:'Trans.json',
      dataType:'json',
      cache:true,
      success:function(data){
        var Input = $('#Input').val();
        var DataOutput = data[Input.toLowerCase()];
        if(typeof(DataOutput) == "object"){
          $('#Output').html(DataOutput[0]);
          $('#Output').clicked(function(){
            alert("output clicked!");
          });
        }else{
          $('#Output').html(DataOutput);
        }
      }
    })
  });
});

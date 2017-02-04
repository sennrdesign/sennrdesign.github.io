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
        }else{
          $('#Output').html(DataOutput);
        }
        $('#Output').click(function(){
          if(typeof(DataOutput) == "object"){
            $('#AllTrans').html("Andere Mogelijkheden:<br/>");
            for(var i = 0;i < DataOutput.length; i++){
              $('#AllTrans').append(DataOutput[i] + "<br/>");
            }
          }
        });
      }
    })
  });
});

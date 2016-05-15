$(document).ready(function(){
    console.log("JQuery Ready!");
    $("#buy").hide();
    $("#GET").click(function(){
      console.log("Handling click");
      $("#log").text("Sending request...");

      var method=$("input[type=radio]:checked").attr("id");

      var request = $.ajax({
        url: "/group/names?apikey="+$("#apikey").val(),
        type: "GET",
        data: $("#payload").val(),
        contentType: "application/json"
      });
      request.done(function(data,status,jqXHR){
        console.log("Handling request (OK)");
        console.log("Data received: ");
        console.log(JSON.stringify(data));
        var statusCode = jqXHR.status;
        var statusCodeText = jqXHR.statusText;
        $("#buy").hide();
        $("#log").text("Data received");
        $("#status").text(statusCode +" "+statusCodeText);
        $("#data").text(JSON.stringify(data));
        console.log("Status: "+statusCode+ " " +statusCodeText);
      });
      request.always(function(jqXHR, status){
        var statusCode = jqXHR.status;
        var statusCodeText = jqXHR.statusText;
        if (status == "error"){
          if(statusCode==401){
            $("#buy").show();
          }else{
            $("#buy").hide();
          }
            $("#status").text(statusCode + " " + statusCodeText);
            $("#data").text("");
            $("#log").text("");
            console.log("Status: "+jqXHR.status+ " " +jqXHR.statusText);
        }else{
            $("#txtStatus").text(status);
        }
      });

    });
  });

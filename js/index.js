$("#btn").click( function(){
  $.ajax({
    method : "GET" ,
    url : "https://baconipsum.com/api/?type=meat-and-filler"
    
  }).done(function(data){
    $("p").text(data[0]) ;
  }).fail(function(){
     alert("Oops !! something went   wrong") ;
  }) ;
}) ;
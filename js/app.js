$(document).ready(function(){
  
  // Change the input placeholder text based on whether or not we're running locally (from the filesystem)
  if (window.location.protocol == "file:")
  {
    $("#address").attr("placeholder", "http://example.com or file:///path/to/file");
  }
  else
  {
    $("#address").attr("placeholder", "http://example.com");
  }

  // On "go", switch the iframe to the specified URL.
  $("#go").on("click", function(e){
    e.preventDefault();
    var url = $("#address").val();
    $("#content").attr("src", url);
  });
  
  // Map "Enter" so it's like clicking "Go"
  $(document).on("keyup", "#address", function(e){
    if (e.which == 13)
    {
      e.preventDefault();
      $("#go").click();
    }
  });
  
});
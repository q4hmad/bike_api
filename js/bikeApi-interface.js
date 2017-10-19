$(document).ready(function() {
  $("#search").click(function() {
  let search =  $("#stolen").val();
  console.log(search);
   $("#stolen").val("");

   $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${search}&distance=10&stolenness=proximity`).then(function(response) {
     response.bikes.forEach(function(bike) {
       $("#frameModel").append("<li>" + `${bike.frame_model}` + "</li>");
       $("#manufacturerName").append("<li>" + `${bike.manufacturer_name}` + "</li>");
       $("#year").append("<li>" +  `${bike.year}` + "</li>");
       $("#color").append("<li>" +  `${bike.frame_colors}` + "</li>");
     }).fail(function(error) {
       $("#showErrors").text("There was an error processing your request: ${error.responseText}. Please try again.");
     });
   });
 });
});

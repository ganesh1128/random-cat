$('#get').click(function() {
 $.getJSON('https://aws.random.cat/meow')
  .done(function(data) {
   $('#catImage').attr("src", data.file);
 })
  .fail(function() {
   console.log("Error");
 })
});
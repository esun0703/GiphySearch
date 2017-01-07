$( document ).ready(function() {
    console.log( "ready!" );

//Generate Buttons
var animes=["Fairy Tail", "Dragonball","Naruto", "Black Butler", "Code Geass", "Inuyasha", "Bleach", "Future Diary"];
console.log(animes);

function buttonGenerator(){
	$("#buttonDisplay").empty();
	for(i=0;i<animes.length;i++){
		var b = $("<button>");
		console.log(b);
		b.addClass("gif");
		b.attr("data-name", animes[i]);
		b.text(animes[i]);
		$("#buttonDisplay").append(b);
	};
};

buttonGenerator();

$("#addGIF").on("click", function(event) {
   event.preventDefault();
   //this line will grab the input from the textbox
   var buttonItem = $("#GIF-input").val().trim();
   animes.push(buttonItem);
   //calling renderButtons, which handles the processing of our movie array
   buttonGenerator();
});

function loadGIF() {
   $("#giphyDisplayHere").empty()
   console.log("inside loadGIF");
   var gifData = $(this).data("name");
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifData + "&api_key=dc6zaTOxFJmzC&limit=20";
   $.ajax({
       url: queryURL,
       method: "GET"
   })
   .done(function(response) {
       console.log(response)
       var results = response.data;
       for (var i = 0; i < results.length ; i++) {
           var gifDiv = $("<div class='item'>");
           var rating = results[i].rating;
           var p = $("<p>").text("Rating: " + rating);
           var gifImage = $("<img>");
           gifImage.attr("src", results[i].images.fixed_height.url);
           gifImage.addClass("xs-col-3")
           gifDiv.prepend(p);
           gifDiv.prepend(gifImage);
           $("#giphyDisplayHere").prepend(gifDiv);      
       }
   });
}

$(document).on("click", ".gif", loadGIF);
   


});


$( document ).ready(function() {
    console.log( "ready!" );
});

//Generate Buttons
var animes=["fairy tail", "dragonball","naruto", "black butler", "code geass", "inuyasha", "bleach"];
console.log(animes);

function buttonGenerator(){
	for(i=0;i<animes.length;i++){
		var b = $("<button>");
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
   console.log(gifs);
   gifs.push(buttonItem);
   //calling renderButtons, which handles the processing of our movie array
   renderButtons();
});

function loadGIF() {
   $("#resultsArea").empty()
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
           var rating = response.data[i].rating;
           var p = $("<p>").text("Rating: " + rating);
           var gifImage = $("<img>");
           gifImage.attr("src", response.data[i].images.fixed_height.url);
           $("#resultsArea").prepend(gifDiv);
           gifDiv.prepend(p);
           gifDiv.prepend(gifImage);
           
       }
   });
}
window.onload = function() {
   $(document).on("click", ".gif", loadGIF);
   
}

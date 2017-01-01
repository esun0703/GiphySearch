//Generate Buttons
var animes=["fairy tail", "dragonball",// "naruto", "black butler", "code geass", "inuyasha", "bleach"
];


for (i=0;i<animes.length;i++){
	buttonGenerator(animes[i]);	
}

function buttonGenerator(animeName){
	console.log(animeName);
	var animeButton=$("<button>").text(animeName).attr("");
	$("#buttonDisplay").append(button);
	//animeButton.attr(
		//text:"" set button's value and text to the word generted.
	//});
}

//When Button Is Clicked
$("button").on("click", function (){	//"this" keyword refers to when this button is clicked//
	//takes the attribute of the button that was clicked.
	var keyword=$(this).attr("data-anime");
	console.log(this);

	//Contructing a URL to search Giphy for the keyword that was clicked
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        keyword + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
	url:queryURL,
	method:"GET"
	})
	.done(function(response){

	});
});

//KeyWord Search To Make Buttons Appear
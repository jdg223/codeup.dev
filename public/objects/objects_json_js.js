// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
 //var books = [todo];

var books = {
	
	"books":[
	
	 {
	 	"object": "Apple",
	 	"Title": "Twilight",
	 	"Author":{
		"firstName":"Stephanie",
		"lastName": "Meyer"
		}
	},
	{	"object": "Mockingjay",
		"Title": "Hunger Games",
		"Author":{
		"firstName":"Suzanne",
		"lastName": "Collins",
		}
	},

	{
		"object": "flower",
		"Title": "Horton Hears a Who",
		"Author":{
			"firstName": "Dr.",
			"lastName": "Seuss"
		}
	},

	{
		"object":"moon",
		"Title": "New Moon",
		"Author": {
			"firstName": "Stephanie",
			"lastName": "Meyer"
		}
	},
	{
		"object": "wallflower",
		"Title": "The Perks of Being a Wallflower",
		"Author":{
			"firstName": "Stephen",
			"lastName": "Chbosky"
		}
	}
			]

};
// log out the books array
for (var i = 0; i < books.length; i++) {
	console.log(books[i]);
};


// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
 books.books.forEach(function(book,index,array){
    console.log("Book #" + index);
    console.log("object: " + book.object);
    console.log("Title: " + book.Title);
    console.log("Author:" + book.Author.firstName + " " + book.Author.lastName);
    console.log("-----------------------");
});

 var movies = {
 	"movies":[

 		{
 			"Title": "The Wolf of Wallstreet",
 			"Genre": "Drama",
 			"Director": {
 				"firstName": "Martin",
 				"lastName": "Scorsesse"
 			}
 		},
 		{
 			"Title": "Avatar",
 			"Genre": "Sci-fi",
 			"Director": {
 				"firstName": "James",
 				"lastName": "Cameron"
 			}
 			
 		},
 		{
 			"Title": "Django Unchained",
 			"Genre": "Action & Adventure",
 			"Director":{
 				"firstName": "Quentin",
 				"lastName": "Tarintino"
 			}
 			
 		}

 	]

 };

 for (var i = 0; i < movies.length; i++) {
 	console.log(movies[i])
 };

 movies.movies.forEach(function(movie,index){
 	console.log("The title of the movie is " + movie.Title)
 	console.log(movie.Director.firstName + " " + movie.Director.lastName + " Directed it")
 	console.log(movie.Genre + " Is the Genre")
 	console.log("===============================")
 });

// end loop here
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


// end loop here
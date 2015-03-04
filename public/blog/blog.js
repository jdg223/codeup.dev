//var title = "blog again"
//var post = 'lorem ipsum'
//var author = "Jd garza"



//     var blog = [
//     {
//         "title": "If you like Coffee",
//         "date": "10-30-2015",
//         "author": " Jon Wayne",
//         "image": "coffee_small.jpg",
//         "tags": [
//             " web",
//             "design",
//             "html"
//         ],
//         "category": "development",
//         "post": "lorem ipsum dolor and stuff here"
//     },
//     {
//         "title": "She Takes Pictures",
//         "date": "1-3-2014",
//         "author": " Micheal Jackson",
//         "image": "photographer.jpg",
//         "tags": [
//             " photography",
//             "ummm",
//             "cameras"
//         ],
//         "category": "Pictures",
//         "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat laborum."
//     },
//         {
//         "title": "Would You Drive This?",
//         "date": "1-3-2014",
//         "author": " Micheal Jackson",
//         "image": "interior.jpg",
//         "tags": [
//             " photography",
//             "ummm",
//             "cameras"
//         ],
//         "category": "development",
//         "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat laborum."
//     },
//         {
//         "title": "Would You Drive This?",
//         "date": "1-3-2014",
//         "author": " Micheal Jackson",
//         "image": "interior.jpg",
//         "tags": [
//             " photography",
//             "ummm",
//             "cameras"
//         ],
//         "category": "development",
//         "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat laborum."
//     }
// ]
    // var postTitle = document.getElementsByClassName('main-title')
    // var postDate = document.getElementsByTagName('h4')
    // var postAuthor = document.getElementsByTagName('h3')
    // var postCategory = document.getElementsByClassName('blog-cat')
    // var postTags = document.getElementsByClassName('blog-tags')
    // //var postImage = document.getElementsByTagName('img')
    // var post = document.getElementsByClassName('article')

    // var posts = document.getElementById('posts')
    // var images = document.getElementsByClassName('img-container')
    // var itemString = ""; 

    // for (var i = 0; i < blog.length; i++) {
    //     itemString += '<h2 class = "main-title ">'+ blog[i]['title'] + '</h2>'
    //     itemString += '<img class = "img-responsive img-rounded" src="' + blog[i]['image'] + '"/>'
    //     itemString += '<h4 class="date">'+ blog[i].date + '</h4>'
    //     itemString += '<h3 id="title-by">By:</h3>'
    //     itemString += '<h3>'+ blog[i].author + '</h3>'
    //     itemString += '<p class="article">'+ blog[i].post + '</p>'
    //     itemString += '<h5 class ="by">Category: </h5>'
    //     itemString += '<h5>'+ blog[i].category+ '</h5>'
    //     itemString += '<h6 class="tag">Tags: </h6>'
    //     itemString += '<h6 class= "blog-tags">'+ blog[i]['tags'] + '</h6>'
    //     itemString += '<br>'
    //     itemString += '<a class="str-left">Comment</a>'
    //     itemString += '<a class="str-right">Share</a>'
    //     itemString += '<hr>'
    // };

    // //posts.innerHTML = postTitle
    // posts.innerHTML = itemString

    // for (var i = 5; i < blog.length; i++) {
    //     var postTheNewPost = function(event) {
    //     posts.blog[i]['title'] = document.getElementById('title').innerText
    //     blog[i].author = document.getElementById('author')
    //     itemString = document.getElementById('date')
    // }
    // document.getElementById('submitTheForm').addEventListener('click',postTheNewPost,false)
    // };

    // console.log(postTitle)

// -------------------------For Title-------------------------------------------------    
        // blog.forEach(function(element,index){

        //     var i = blog
        //     function putTitleOnPage(){
        //     postTitle[i].innerHTML +=  '<h2 class = "main-title">'+ blog[i]['title'] + '</h2>'
        // }
        //     putTitleOnPage();

        //     function putAuthorOnPage(){
        //     postAuthor[i].innerHTML += '<h6>' + blog[i].author + '</h6>'
        // }
        //     putAuthorOnPage();
        //     function putCategoryOnPage(){
        //     postCategory[i].innerHTML += '<p class= "blog-cat">' + blog[i].category +'</p>';
        // }
        //     putCategoryOnPage();
        //     function putTagOnPage(){
        //     postTags[i].innerHTML += '<p class="blog-tags">'+blog[i]['tags']+'</p>';
        // }
        //     putTagOnPage();
        //     function putImageOnPage(){
        //     postImage[i] +=  blog[i]['image'];
        // }
        //     putImageOnPage();
        //     function putDateOnPage(){
        //     postDate[i].innerHTML = '<h4>'+ blog[i].date + '</h4>';
        // }
        //     putDateOnPage();
        //     function putPostOnPage(){
        //     post[i].innerHTML = '<p class= "article">'+blog[i].post+'</p>'
        //     }
        //     putPostOnPage();

            //return putTitleOnPage();
            //return putAuthorOnPage();
            //return putPostOnPage();
            //return putImageOnPage();
            //return putDateOnPage();
            //return putTagOnPage();
            //return putCategoryOnPage();
    // });


            
// //---------------------------For Date-------------------------------------------------
//     blog.forEach(function(element,index) {
//         for (var i = 0; i < postDate.length; i++) {
//                 var datePost = postDate[i].innerHTML = element.date
//                     return datePost;
//         };
//     })
// //------------------------------For Author-------------------------------------------------------
//     blog.forEach(function(element,index) {
//         for (var i = 0; i < postAuthor.length; i++) {
//                 var authorPost = postAuthor[i].innerHTML = element.author
//                     return authorPost;
//         };
//     })
// //--------------------------------For Category----------------------------------------------------------------
//     blog.forEach(function(element,index) {
//         for (var i = 0; i < postCategory.length; i++) {
//                 var categoryPost = postCategory[i].innerHTML = element.category
//                     return categoryPost;
//         };
//     })
// //---------------------------------For Tags-----------------------------------------------------------------------
        // blog.forEach(function(element,index) {
        // for (var i = 0; i < postTags.length; i++) {
        //         var tagsPost = postTags[i].innerHTML = element['tags']
        //             return tagsPost;
        // };
//    })
//----------------------------------------------------------------------------------------------------------------

//------------------Post 1-------------------

// postTitle[0].innerHTML = blog[0]['title'];
// postAuthor[0].innerHTML = blog[0].author;
// postCategory[0].innerHTML = blog[0].category;
// postTags[0].innerHTML = blog[0]['tags'];
// postImage[0].src = blog[0]['image'];
// postDate[0].innerHTML = blog[0].date;
// post[0].innerHTML = blog[0].post;
//------------------Post 2-------------------
// postTitle[1].innerHTML = blog[1]['title'];
// postAuthor[1].innerHTML = blog[1].author;
// postCategory[1].innerHTML = blog[1].category;
// postTags[1].innerHTML = blog[1]['tags'];
// postImage[1].src = blog[1]['image'];
// postDate[1].innerHTML = blog[1].date;
// post[1].innerHTML = blog[1].post;
// //-----------------Post 3--------------------
// postTitle[2].innerHTML = blog[2]['title'];
// postAuthor[2].innerHTML = blog[2].author;
// postCategory[2].innerHTML = blog[2].category;
// postTags[2].innerHTML = blog[2]['tags'];
// postImage[2].src = blog[2]['image'];
// postDate[2].innerHTML = blog[2].date;
// post[2].innerHTML = blog[2].post;

    
//
// blog.title;
// blog.date - blog.author - category
// tags: web, design, html
// image - post
// console.log(blog[0].title)
// title
// date - author - category
// tags: web, design, html
// post
// image - post
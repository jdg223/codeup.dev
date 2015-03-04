      (function() {
         var blog = $.get('data/blog.json');
         blog.done(function(data) {
            var posts = $('.container');
             var postString = '';
             console.log(data);
              $(data).each(function(index,element) {
                postString += '<img class = "img-responsive img-rounded" src="' + element.image + '"/>'
               postString += '<h4 class="date">'+ element.date + '</h4>'
               postString += '<h3 id="title-by">By:</h3>'
               postString += '<h3>'+ element.author + '</h3>'
               postString += '<h2 class = "main-title">'+ element.title + '</h2>'
               postString += '<p class="article">'+ element.post + '</p>'
               postString += '<h5 class ="by">Category: </h5>'
               postString += '<h5>'+ element.category+ '</h5>'
               postString += '<h6 class="tag">Tags: </h6>'
               postString += '<h6 class= "blog-tags">'+ element.tags + '</h6>'
               postString += '<br>'
               postString += '<hr>'
              // itemString += '<a class="str-left">Comment</a>'
              // itemString += '<a class="str-right">Share</a>'
              // itemString += '<hr>'
              posts.html(postString);
              console.log(postString)
            });
                
      });
        $('.btn').click(function() {
          blog
        })
     })();
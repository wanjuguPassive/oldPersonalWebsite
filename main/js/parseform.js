//FORM
Parse.initialize("IU7a7FRlt4XYkjop83ZeGjhGKw75WvTozxGQlALU", "A9l8Hay09r6OvWBh6GU4byFDzrGyNbX7ULAZBv1N");

var Post = Parse.Object.extend("FormPost");

//USING JQUERY ON FORM WITH PARSE
//listening for the submit action on the form
$("#post-form").submit(function(event){
  event.preventDefault();

      var firstname = $("#first-name").val();
      var lastname = $("#last-name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      var newPost = new Post();
      newPost.set("firstname", firstname);
      newPost.set("lastname", lastname);
      newPost.set("email", email);
      newPost.set("message", message);


      newPost.save({
          success: function(){
              $("#post-form").find('input[type=text]').val('');
              $("#post-form").find('textarea[type=text]').val('');
          },
          error: function(error){
              console.log("Error:"+error.message);
          }
  });
});

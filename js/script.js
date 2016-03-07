OAuth.initialize("yWb_FpxTJZYrOZllRUY8eQV7ZuE");
var result;
var result_data;

window.onload = function() {

    document.getElementById('btn-url').addEventListener('click', function() {
      var url = window.location.href;     // Returns full URL
      // var a = $('<a>', { href:url } )[0];
      //
      // $('#host').val(a.hostname);
      // $('#path').val(a.pathname);
      // $('#query').val(a.search);
      // $('#hash').val(a.hash);
      
    });

    document.getElementById('connect').addEventListener('click', function() {
      OAuth.popup("twitter", function(e,r) {
          // to use r.get etc. you need to have jquery included at this point
          result = r;
          r.get('/1.1/account/verify_credentials.json').done(function(data) {
            result_data = data;
          });
      });
    });
}


// {
//   oauth_token:
//     "xxxxxxx",
//   oauth_token_secret:
//     "xxxxxx",
//   provider:"twitter"
// }

// OAuth.popup("twitter", function(e,r) {
//   r.post("/1.1/users/lookup.json", { data: { screen_name: "elaine_gouvea" } }).done(
//     function(user_id){
//       console.log(user_id);
//     }
//   );
// });

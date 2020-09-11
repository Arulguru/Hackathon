document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector(".btn-primary")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#contents")
                .innerHTML = "<h2>" +name + "!</h2>";
            });

        
      });
  }
);



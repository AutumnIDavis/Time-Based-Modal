//Create a function that calls that ID and turns it visible
        function login() {
            document.getElementById("modal").style.visibility = "visible";
      }
//Set the time so that it turns visible after 3 seconds
        setTimeout("login()", 3000);


        function closeMod(){
            document.getElementById("closeButton").onclick = {
               $("modal").hide();
            }
        }


$(document).ready(function(){
    $( function() {
        $( "#tabs" ).tabs();
      } );
});

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}


$(document).ready(function(){
    $(".design").click(function(){
        $("#design-pic").toggle();
        $("#design2").toggle();
    });
    $(".development").click(function(){
        $("#development-pic").toggle();
        $(".development2").toggle();
    });
    $(".product").click(function(){
        $("#product-pic").toggle();
        $(".product2").toggle();
    });

});
function forms(){
    var buttons = document.getElementById("button");
    buttons.onclick = function (event) {
        var form = document.forms["form"]["contact"].value;
        if (form == "" && email == "" && name == "") {
            alert("Please fill in the form");
            return false;
        } else
            if (name == "") {
                alert("Please enter your name here.")
                return false;
            }
        var email = document.forms["forms"]["email"].value;
        if (email== "") {
            alert("Please enter your email here");
            return false;
        }
        var message = document.forms["forms"]["textarea"].value;
        if (message == "") {
            alert("Please enter a message");
            return false;
        }
        if ( !== "" && email !== "" && message !== "") {
            alert("Message Sent!");
        }
    }
}
$(document).ready(function() {
    $("div.image frame").hover(function () { 
        $(".image-frame").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image frame").hover(function () { 
        $(".image-frame").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image frame").hover(function () { 
        $(".image-frame").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image frame").hover(function () { 
        $(".image-frame").addClass("mask flex-center rgba-red-strong");
    });

})
// wwd
$(document).ready(function () {
    $(".design_icon").click(function () {
        $("#design_icon").toggle();
        $("#design-p").toggle();
    });
    $(".dev_icon").click(function () {
        $("#development").toggle();
        $("#dev_icon").toggle();
    });
    $(".product_icon").click(function () {
        $("#pmanagent").toggle();
        $("#product_icon").toggle();
    });
});


// form
function myforms() {
    var buttons = document.getElementById("button");
    buttons.onclick = function (event) {
        var name = document.forms["myForm"]["Name1"].value;
        var email = document.forms["myForm"]["Email2"].value;
        var message = document.forms["myForm"]["textarea"].value;
        if (name == "" || email == "" || message == "") {
            alert("Please fill in fields and try again.");
            return false;
        }
        if (name !== "" && email !== "" && message !== "") {
            alert("Hello " + name + " " + ", your message has been sent successfully! We'll reach out to you soon");
        }
    }
}

// portfolio
$(document).ready(function () {
    $("div.images").hover(function (){
        $(".images").addClass("mask flex-center rgba-blue-light");
    });
    $("div.images").hover(function (){
        $(".images").addClass("mask flex-center rgba-red-strong");
    });
    $("div.images").hover(function (){
        $(".images").addClass("mask flex-center rgba-green-slight");
    });
});
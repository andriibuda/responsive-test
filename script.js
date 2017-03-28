// var button = document.getElementById("mobile-button");
// button.onclick(var obj = document.getElementsByClassName("menu-item");
//         obj.style.display = "block";
//
// );

window.onload = function() {
    var element = document.getElementById("mobile-button");
    element.onclick = function () {
        document.getElementsByClassName("menu-item").style.display = "block";
        //alert('fdksjf');
    }
};
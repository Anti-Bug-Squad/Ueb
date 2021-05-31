//-------------------------------------Nav bar--------------------------------------------------//
var c=0;
var p=0;
var s=0;
function search(){
    if (window.matchMedia("(max-width:992px)").matches) {
        
        p=0;
        document.getElementById("profileNav").style.visibility = "hidden";
        document.getElementById("profileNav").style.opacity = "0";
        c=0;
        document.getElementById("contentNav").style.visibility = "hidden";
        document.getElementById("contentNav").style.opacity = "0";


        if (s==0) {
            s=1;
        document.getElementById("formnav").style.visibility = "visible";
        document.getElementById("formnav").style.opacity = "1";
        document.getElementById("formnav").style.transition = "0.3s";

        document.getElementsByClassName("fa-search")[0].classList.add("fa-times");
        }else{
            s=0;
        document.getElementById("formnav").style.visibility = "hidden";
        document.getElementById("formnav").style.opacity = "0";
        document.getElementById("formnav").style.transition = "0.3s";

        document.getElementsByClassName("fa-search")[0].classList.remove("fa-times");
        }
    }
}

function content(){
    s=1;
    if (window.matchMedia("(max-width:992px)").matches) {
        p=0;
        document.getElementById("profileNav").style.visibility = "hidden";
        document.getElementById("profileNav").style.opacity = "0";
        
        document.getElementsByClassName("fa-search")[0].classList.remove("fa-times");
    if (c==0) {
        c=1;
        document.getElementById("contentNav").style.visibility = "visible";
        document.getElementById("contentNav").style.opacity = "1";
        
        document.getElementsByClassName("fa-search")[0].classList.add("fa-times");
    }else{
        c=0;
        document.getElementById("contentNav").style.visibility = "hidden";
        document.getElementById("contentNav").style.opacity = "0";
    }
    }
}
function profile(){
    s=1;
    if (window.matchMedia("(max-width:992px)").matches) {
        c=0;
        document.getElementById("contentNav").style.visibility = "hidden";
        document.getElementById("contentNav").style.opacity = "0";

        document.getElementsByClassName("fa-search")[0].classList.remove("fa-times");
    if (p==0) {
        p=1;
        document.getElementById("profileNav").style.visibility = "visible";
        document.getElementById("profileNav").style.opacity = "1";
        
        document.getElementsByClassName("fa-search")[0].classList.add("fa-times");
    }else{
        p=0;
        document.getElementById("profileNav").style.visibility = "hidden";
        document.getElementById("profileNav").style.opacity = "0";
    }
    }
}

$(document).ready(
    function()
    {
        $(".dbutton").mousedown(function(){

            $(this).css("box-shadow","-1px -1px black");
            $(this).css("font-size","1rem");

        });
        $(".dbutton").mouseup(function(){

            $(this).css("box-shadow"," 0 3px 15px -3px #363636");
            $(this).css("font-size","1.1rem");
        });
        $(".dbutton").mouseleave(function(){

            $(this).css("box-shadow"," 0 3px 15px -3px #363636");
            $(this).css("font-size","1.1rem");
        });
    }


);
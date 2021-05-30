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
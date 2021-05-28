$(document).ready(
    function()
    {
        $(".dbutton").mousedown(function(){

            $(this).css("box-shadow","-1px -1px black");
            $(this).css("font-size","1rem");

        });
        $(".dbutton").mouseup(function(){

            $(this).css("box-shadow","2px 2px black");
            $(this).css("font-size","1.1rem");
        });
        $(".dbutton").mouseleave(function(){

            $(this).css("box-shadow","2px 2px black");
            $(this).css("font-size","1.1rem");
        });
    }


);
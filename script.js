$(document).ready(
    function()
    {
        $(".dbutton").mousedown(function(){

            $(this).css("box-shadow","-1px -1px black");
        });
        $(".dbutton").mouseup(function(){

            $(this).css("box-shadow","2px 2px black");
        })
    }


)
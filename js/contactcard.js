//==================================================================//
//  Created: INSERTDATE by Troy Center, troycenter1@gmail.com.      //
//  INSERT DESCRIPTION                                              //
//==================================================================//


"use strict";
$(document).ready(function(){

        $(document).on("click",".namecard",function(){
            $(".namecard").css("display", "none");
            $(".descriptioncard").css("display", "block")
        });
        $(document).on("click",".descriptioncard",function(){
            $(".namecard").css("display", "block");
            $(".descriptioncard").css("display", "none")            
        });

//======================================================================//
//  This is the changerhider. When the card is clicked, it will         //
//  fade to black, change text, and fade back in. It will revert when.  //
//======================================================================//

    $(document).on("click","#addcontact",function(){ 

            $("tbody:last").append("<tr class='namecard'>");            
                $("tr:last").append("<td class='name'>"+document.getElementById("firstname").value+"</td>");
                $("tr:last").append("<td class='descriptionplaceholder'>'Hover here for description'</td>");
                $("tr:last").append("</tr>");
            $("tbody:last").append("<tr class='descriptioncard'>");
                $("tr:last").append("<td class 'description'>"+document.getElementById("description").value+"</td>");
                $("tr:last").append("</tr>");
            $(".descriptioncard").css("display", "none");

    });
            
});
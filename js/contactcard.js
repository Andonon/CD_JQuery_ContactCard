//==================================================================//
//  Created: INSERTDATE by Troy Center, troycenter1@gmail.com.      //
//  INSERT DESCRIPTION                                              //
//==================================================================//

"use strict";
    $(document).ready(function(){


        $("#hidebutton").click(function(){
            alert("hide button clicked")
            //$("tr").hide();
        });

        $("#addcontact").click(function(){
            alert("add button clicked")
            //$("tr").hide();
        });

        $(document).on("click","button"(function(){ 
                $("#contactcards:last").append("<tr></tr>");
                $("#contactcards:last").append("<td>"+document.getElementById("firstname").value+"</td>");
                $("#contactcards:last").append("<td>"+document.getElementById("lastname").value+"</td>");
                $("#contactcards:last").append("<td>"+document.getElementById("email").value+"</td>");
                $("#contactcards:last").append("<td>"+document.getElementById("phone").value+"</td>");
                // $("#userlist tr:last").after.append("</tr>");
                // alert("Added User");  
                var firstname = document.getElementById("firstname").value
                var lastname = document.getElementById("lastname").value
                success([firstname+" "+lastname]);        
        }));


        $("#description").on("click",function(){
            $("#firstname", "#lastname", "#description").fadeOut(500),
            $(this).fadeIn(500)
        });

        // $(".card").on({
        //     mousenter: function(){
        //         $(this).fadeOut(500)//,function(){
        //   //      var srcimg = $(this).;
        //   //      var altsrcimg = $(this).;
        //   //      });
        //     },
        //     mouseleave: function(){
        //         $(this).fadeIn(500)//,function(){
        //   //      var srcimg = $(this).;
        //   //      var altsrcimg = $(this).;
        // //        });          
        //     }});
            
    //==================================================================//
    //  if form changes, or onKeyUp, update variables.                  //
    //==================================================================//

        function formChanged(){
            var firstname = document.getElementById("firstname").value;
                // console.log(firstname);
            var lastname = document.getElementById("lastname").value;
                // console.log(lastname);
            var description = document.getElementById("description").value;
                // console.log(email);
        }

    //==================================================================//
    //  Created: INSERTDATE by Troy Center, troycenter1@gmail.com.      //
    //  INSERT DESCRIPTION                                              //
    //==================================================================//
        
        function success(output){
            alert("User Added: "+output);
            $("#contactform").reset();
        }
        



    });

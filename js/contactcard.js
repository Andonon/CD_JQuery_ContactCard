//==================================================================//
//  Created: INSERTDATE by Troy Center, troycenter1@gmail.com.      //
//  INSERT DESCRIPTION                                              //
//==================================================================//

"use strict";
    $(document).on("click","button"(function(){ 
            $("#userlist tbody:last").append("<tr></tr>");
            $("#userlist tr:last").append("<td>"+document.getElementById("firstname").value+"</td>");
            $("#userlist tr:last").append("<td>"+document.getElementById("lastname").value+"</td>");
            $("#userlist tr:last").append("<td>"+document.getElementById("email").value+"</td>");
            $("#userlist tr:last").append("<td>"+document.getElementById("phone").value+"</td>");
            // $("#userlist tr:last").after.append("</tr>");
            // alert("Added User");  
            var firstname = document.getElementById("firstname").value
            var lastname = document.getElementById("lastname").value
            success([firstname+" "+lastname]);        
        }));    
    function formChanged(){
        var firstname = document.getElementById("firstname").value;
            // console.log(firstname);
        var lastname = document.getElementById("lastname").value;
            // console.log(lastname);
        var email = document.getElementById("email").value;
            // console.log(email);
        var phone = document.getElementById("phone").value;
            // console.log(phone);
    }
    function success(output){
        alert("User Added: "+output);
        $("#contactform").reset();
    }
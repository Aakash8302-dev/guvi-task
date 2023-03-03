$(document).ready(function(){
    localStorage.removeItem('studentLoggedIn');
})

function login() {
    let loginEmail = $('#login_email').val();
    let loginPassword = $.trim($('#login_password').val()).toString();

    // let loginData = {
    //     'email': loginEmail, 'password': loginPassword
    // }

    let loginData = 'email=' + loginEmail + '&password=' + loginPassword;
    
    $.ajax({  
        url: 'http://localhost/task/php/login.php' + '?' + loginData,  
        type: 'GET', 
        //data: JSON.stringify(studentData),
        async: false, 
        success: function(data) { 
            let loginResponse = JSON.parse(data);

            if(loginResponse != null) {
                if(loginResponse.id != undefined && loginResponse.id != null && loginResponse.id != "") {
                    localStorage.setItem('studentLoggedIn', 'true');
                    window.location = window.location.origin + "/task/profile.html";
                }
            }
            else {
                alert("Login failed. Kindly check you email and password.");
            }   
        } 
    });  
}
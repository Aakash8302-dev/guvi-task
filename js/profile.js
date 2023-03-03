$(document).ready(function(){
    if(localStorage.getItem('studentLoggedIn') != "true")
        window.location = window.location.origin + '/task/login.html';
})

function handleLogout(){
    localStorage.removeItem('studentLoggedIn')
    window.location = window.location.origin + '/task/login.html'
}

function updateProfile(){

    let studentAge = $('#profile_age').val();
    let studentAddress = $('#profile_address').val();

    let studentData = 'age=' + studentAge + "&address=" + studentAddress;

    $.ajax({  
        url: 'http://localhost/task/php/profile.php' + '?' + studentData,  
        type: 'GET', 
        //data: JSON.stringify(studentData),
        async: false, 
        success: function(data) {  
            if(data) {
                console.log(data)
            }       
        }
    });  

}
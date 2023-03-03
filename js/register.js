function registerStudent() {
    let studentId = $('#student_id').val();
    let studentName = $('#student_name').val();
    let studentEmail = $('#student_email').val();
    let studentPassword = "";

    if(validate(studentId, studentName, studentEmail)){

        if($.trim($('#student_password').val()) != $.trim($('#student_confirm_password').val())) {
            alert("Passwords do not match");
            return;
        }
        else{
            studentPassword = $.trim($('#student_confirm_password').val()).toString();
        }
            
    
        // let studentData = {
        //     'id': studentId, 'name': studentName, 'email': studentEmail, 'password': studentPassword
        // }
    
        let studentData = 'id=' + studentId + '&name=' + studentName + '&email=' + studentEmail + '&password=' + studentPassword;
        
        $.ajax({  
            url: 'http://localhost/task/php/register.php' + '?' + studentData,  
            type: 'GET', 
            //data: JSON.stringify(studentData),
            async: false, 
            success: function(data) {  
                if(data) {
                    alert("Student registered successfully");
                    window.location = window.location.origin + '/task/login.html';
                }       
            }
        });  
    }
}



function validate(studentId, studentName, studentEmail){

    if(!studentId.length>0 || !studentName.length>0 || !studentEmail.length>0 ){
        alert("Enter all details");
        return false;
    }if(!(/^[0-9]+$/).test(studentId)){
        alert("Enter valid Student ID");
        return false;
    }
    else if(!(/^[A-Za-z]+$/).test(studentName)){
        alert("Enter valid Name");
        return false;
    }else if(!(/@/).test(studentEmail)){
        alert("Enter valid email");
        return false;
    }else{
        return true;
    }


}
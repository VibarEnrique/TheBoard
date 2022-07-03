$(document).ready(function () {
    // ajax tba
})

function validateReg() {

    let Username = $("#Username").val();
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    let confirmPass = $("#confirmPass").val();
    let pass_len = Password.length

    if (pass_len < 6) {
        event.preventDefault()
        alert("Passwords must be 6 characters minimum")
        return false
    }
    if (Password === confirmPass)
        return true
    else {
        event.preventDefault()
        alert("Passwords do not match")
        return false
    }
}

function validatePost () {
    
    let PostTitle = $("#PostTitle").val().length
    let Content = $("#Content").val().length
    let Forum = $("#Forum").val().length
    let SubForum = $("#SubForum").val().length
    
    if ((PostTitle == 0) || (Content == 0) || (Forum == 0) || (SubForum == 0)) {
        event.preventDefault()
        alert("Fill up all necessary fields")
    } else
        return true
}


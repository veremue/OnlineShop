$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});


function formSubmit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;

    var dataString = "email=" + email + "&password=" + password + "&confirm_password=" + confirm_password;

    jQuery.ajax({
        url: "http://localhost/OnlineShop/API/new_user_register_api.php",
        data: dataString,
        type: "POST",
        success: function(data) {
            $("#register-form").html(data);
            console.log('success');
        },
        error: function() {
            console.log('error');
        }
    });
    return true;
}

function formLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var dataString = "email=" + email + "&password=" + password;

    jQuery.ajax({
        url: "http://localhost/OnlineShop/API/fetch_user_login_api.php",
        data: dataString,
        type: "POST",
        success: function(data) {
            $("#login-form").html(data);
            console.log('success');
            window.location.href = "store.html?shopper=";

            // $.getJSON(url, function(result) {
            //     console.log(result);
            //     $.each(result, function(i, field) {
            //         var email = field.email;
            //         window.location.href = "store.html?shopper=" + email + " ";
            //     });
            // });
        },
        error: function() {
            console.log('error');
        }
    });
    return true;
}
/*

Script  : Subscribe Form
Version : 1.0
Author  : Surjith S M
URI   	: http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function() {

    "use strict";

    /* 
    VALIDATE
    -------- */

    $("#subscribeform").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            /* uncomment if Name is needed */
            /* 
            first_name: "required",
            last_name: "required", 
            */
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            /*
            first_name: "Your first name please",
            last_name: "Your last name please", 
            */
            email: "Please enter your email address"
        },
        submitHandler: function(form) {

            $("#js-subscribe-btn").attr("disabled", true);

            /* 
             CHECK PAGE FOR REDIRECT (Thank you page)
             ---------------------------------------- */

            var redirect = $('#subscribeform').data('redirect');
            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }

            $("#js-subscribe-result").fadeIn("slow").html('<p class="help-block">Please wait...</p>');

            /* 
             FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
             --------------------------------------------- */

            var success_msg = $('#js-subscribe-result').data('success-msg');
            var error_msg = $('#js-subscribe-result').data('error-msg');

            var dataString = $(form).serialize();

            /* 
             AJAX POST
             --------- */

            $.ajax({
                type: "POST",
                data: dataString,
                url: "php/subscribe.php",
                cache: false,
                success: function(d) {
                    $(".form-group").removeClass("has-success");
                    if (d == 'success') {
                        if (noredirect) {
                            $('#js-subscribe-result').fadeIn('slow').html('<p class="help-block text-success">' + success_msg + '</p>').delay(3000).fadeOut('slow');
                        } else {
                            window.location.href = redirect;
                        }
                    } else {
                        $('#js-subscribe-result').fadeIn('slow').html('<p class="help-block text-danger">' + error_msg + '</p>').delay(3000).fadeOut('slow');
                    }
                    $("#js-subscribe-btn").attr("disabled", false);
                }
            });
            return false;

        }
    });

});

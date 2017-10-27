// check if any class has error to prevent submit button
$('#submit_address_checkout').click(function() {
    if ( $( "#div_phone" ).hasClass( "has-error" )){
    }
    else if ( $( "#div_city" ).hasClass( "has-error" )){
    }
    else if ( $( "#div_zip" ).hasClass( "has-error" )){
    }
    else{
        $( ".checkout_autoformat").submit();
    }    
});
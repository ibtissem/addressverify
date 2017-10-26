$('.checkout_autoformat').click(function() {
   var  street_input =  $('input[name=street]').val();
   var  city_input =  $('input[name=city]').val();
   var  zip_input =  $('input[name=zip]').val();
   var  country_input =  $.trim($('#country_id option:selected').text());
   var  country_code =  $.trim($('#country_id option:selected').attr("id"));
   var  api_key =  'AIzaSyA7uOWWveTnYijubv4smC3z2KO5MJiavLI';
   var address_string = street_input+' ' + city_input+' '+ zip_input+','+country_input ;
   
   //    Json to check if zip code is valid using googleapis
   if ((city_input =="" ||  zip_input =="" ||  country_input =="") && (city_input =="" ||  zip_input =="" ||  country_input =="" ||  street_input =="")  ){
   } 
   else{
    $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $.trim(address_string) + '&key=' + api_key,
    dataType: 'json',
    success: function(json) {
        if(json.status === 'ZERO_RESULTS'){
        show_invalid_address()
        setTimeout(function(){  $('#validity_adresse').hide() }, 5000);

        }
        else {
        show_valid_address();
        setTimeout(function(){ $('#validity_adresse').hide();  }, 5000);

        }

    },
        error: function(dat){
        }
    });
   }
//    Json to check if zip code is valid using zippopotam
   if (zip_input =="" ||  country_code =="" ){
   } 
   else{
    $.ajax({
    url: 'http://api.zippopotam.us/' + country_code + '/' + zip_input,
    dataType: 'json',
    success: function(json) {
        show_valid_zip();
        setTimeout(function(){ $('#validity_zip').hide();  }, 5000);
    },
    error: function(dat){
//         empty responce return as an error for this api
        show_invalid_zip()
        setTimeout(function(){  $('#validity_zip').hide() }, 5000);
    }
   });
   }
 });
 
    function show_invalid_address(){
        $('#validity_adresse').html("Not valid address");
        $('#validity_adresse').show();
        $('#validity_adresse').css("color","red");
        $('#validity_adresse').closest('div').addClass('has-error');
    }
    
    function show_valid_address(){
        $('#validity_adresse').html("Valid address");
        $('#validity_adresse').show();
        $('#validity_adresse').css("color","green");
        $('#validity_adresse').closest('div').removeClass('has-error'); 
    }    
    
    function show_invalid_zip(){
        $('#validity_zip').remove();
        $("input[name=zip]").after('<span id="validity_zip">Not valid Zip code</span>');
        $('#validity_zip').css("color","red");
        $('#validity_zip').closest('div').addClass('has-error');
    }
    function show_valid_zip(){
        $('#validity_zip').remove();
        $("input[name=zip]").after('<span id="validity_zip">Valid Zip code</span>');
        $('#validity_zip').css("color","green");
        $('#validity_zip').closest('div').removeClass('has-error'); 
    }
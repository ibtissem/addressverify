$('.checkout_autoformat').click(function() {
   var  street_input =  $('input[name=street]').val();
   var  city_input =  $('input[name=city]').val();
   var  zip_input =  $('input[name=zip]').val();
   var  country_input =  $.trim($('#country_id option:selected').text());
   var  api_key =  'AIzaSyA7uOWWveTnYijubv4smC3z2KO5MJiavLI';
   var address_string = street_input+' ' + city_input+' '+ zip_input+','+country_input ;
   console.log(country_input);
   console.log(city_input);
   console.log(zip_input);
   console.log($.trim(address_string));
   console.log(api_key);
   if ((city_input =="" ||  zip_input =="" ||  country_input =="") && (city_input =="" ||  zip_input =="" ||  country_input =="" ||  street_input =="")  ){
   } 
   else{
    $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $.trim(address_string) + '&key=' + api_key,
    dataType: 'json',
    success: function(json) {
        console.log(json)
        if(json.status === 'ZERO_RESULTS'){
        show_invalid_msg()
        setTimeout(function(){  $('#validity_adresse').hide() }, 5000);

        }
        else {
        show_valid_msg();
        setTimeout(function(){ $('#validity_adresse').hide();  }, 5000);

        }

    },
    error: function(dat){
        console.log('naaantin book');console.log(dat);
    }
    });
   }
 });
 
     function show_invalid_msg(){

        $('#validity_adresse').html("Not valid adress");
        $('#validity_adresse').show();
        $('#validity_adresse').css("color","red");
        $('#validity_adresse').closest('div').addClass('has-error');

    }
    function show_valid_msg(){
        $('#validity_adresse').html("Valid adress");
        $('#validity_adresse').show();
         $('#validity_adresse').css("color","green");
        $('#validity_adresse').closest('div').removeClass('has-error'); 
    }

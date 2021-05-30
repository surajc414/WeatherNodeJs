
    // Get weather data through API request

    $('#submitBtn').on('click',()=>{

        let cityName = $('#cityName').val();
        
        if(cityName=="" || cityName=='undefined' || cityName=='null' || cityName==null)
        { 
            $('#show_city_name').val("Enter the correct city name");
            return;
        }
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e62a359cbd79cb7d8d160bfced2ae5d8`;

        $.ajax({

            type: 'POST',
            dataType: 'json',
            url:url,
            success:(data,status)=>{
                if(status ==='success')
                {
                   
                    console.log(data.main);
                }
                
                    
            }
        })
        
        
    });
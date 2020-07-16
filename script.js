// 

$(document).ready(function(){

    $( ".forecast-title" ).hide()


    $('#search').click(function(){
        let seachValue =  $('#city').val()
        getWeather(seachValue);
    }); 

    $("#history").on("click", "li", function() {
        getWeather($(this).text());
      });


});


function getWeather(searchValue){
    
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
            var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            $('#cityName').text(data.name + " (" + new Date().toLocaleDateString() + ")").append(img)
            $('#temp').text("Tempreture: " + data.main.temp + "F");
            $('#humid').text("Himidity: "+data.main.humidity + "%")
            $('#windspeed').text("Windspeed: "+data.wind.speed + "MPH")
           
            getUVindex(data.coord.lon, data.coord.lat)
            get5day(searchValue)

            makeRow(searchValue);

        }
      });
   

}

function getUVindex(lon, lat){
    $.ajax({
        type: "GET",
        url:`https://api.openweathermap.org/data/2.5/uvi?appid=8be5a1165eb8ec2b6aa6462c0cbbd937&lat=${lat}&lon=${lon}`,
        dataType: "json",
        success: function(data) {
         console.log(data)
        if(data.value <3){
            var btn = $("<span>").addClass("btn btn-sm btn-success").text(data.value);
            $('#uvindex').text("UV Index: ").append(btn);
        }else if (data.value < 7){
            var btn = $("<span>").addClass("btn btn-sm btn-warning").text(data.value);
            $('#uvindex').text("UV Index: ").append(btn);
        }else {
            var btn = $("<span>").addClass("btn btn-sm btn-danger").text(data.value);
            $('#uvindex').text("UV Index: ").append(btn);
        }
        
        }
    });

}

function get5day(searchValue){

    $('#day1').empty();
    $('#day2').empty();
    $('#day3').empty();
    $('#day4').empty();
    $('#day5').empty();
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
         $( ".forecast-title" ).show()
            let h3 = $('<h3>').text(new Date().toLocaleDateString());
            let  temp = $('<h5>').text('Tempreture: ');
            let hum = $('<h5>').text('Humidity: ');
            

            
            $('#day1')
                    .append($("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"))
                    .append(temp.text("Tempreture: "+ data.list[0].main.temp +"F"))
                    .append(hum.text("Humidity: "+ data.list[0].main.humidity +"MPH"));
             
           
            console.log(data.list[1].main.temp)
        }    
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
         $( ".forecast-title" ).show()
            let h3 = $('<h3>').text(new Date().toLocaleDateString());
            let  temp = $('<h5>').text('Tempreture: ');
            let hum = $('<h5>').text('Humidity: ');
            

            
            $('#day2')
            
                    .append($("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png"))
                    .append(temp.text("Tempreture: "+ data.list[2].main.temp +"F"))
                    .append(hum.text("Humidity: "+ data.list[3].main.humidity +"MPH"));
             
           
            console.log(data.list[1].main.temp)
        }    
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
         $( ".forecast-title" ).show()
            let h3 = $('<h3>').text(new Date().toLocaleDateString());
            let  temp = $('<h5>').text('Tempreture: ');
            let hum = $('<h5>').text('Humidity: ');
            

            
            $('#day3')
                    .append($("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png"))
                    .append(temp.text("Tempreture: "+ data.list[2].main.temp +"F"))
                    .append(hum.text("Humidity: "+ data.list[2].main.humidity +"MPH"));
             
           
            // console.log(data.list[1].main.temp)
        }    
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
         $( ".forecast-title" ).show()
            let h3 = $('<h3>').text(new Date().toLocaleDateString());
            let  temp = $('<h5>').text('Tempreture: ');
            let hum = $('<h5>').text('Humidity: ');
            

            
            $('#day4')
                    .append($("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png"))
                    .append(temp.text("Tempreture: "+ data.list[3].main.temp +"F"))
                    .append(hum.text("Humidity: "+ data.list[3].main.humidity +"MPH"));
             
           
            console.log(data.list[1].main.temp)
        }    
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8be5a1165eb8ec2b6aa6462c0cbbd937&units=imperial",
        dataType: "json",
        success: function(data) {
         console.log(data)
         $( ".forecast-title" ).show()
            let h3 = $('<h3>').text(new Date().toLocaleDateString());
            let  temp = $('<h5>').text('Tempreture: ');
            let hum = $('<h5>').text('Humidity: ');
            

            
            $('#day5')
                    .append($("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png"))
                    .append(temp.text("Tempreture: "+ data.list[4].main.temp +"F"))
                    .append(hum.text("Humidity: "+ data.list[4].main.humidity +"MPH"));
             
           
            console.log(data.list[1].main.temp)
        }    
    });

}



  function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $("#history").append(li);
  }

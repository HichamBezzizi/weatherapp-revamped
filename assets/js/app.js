//DOM
const form = document.querySelector('form');
const cityName = document.getElementById('cityName');
const btn = document.querySelector('.btn');
const weatherIcon = document.getElementsByClassName('icons');
const cardContent = document.getElementsByClassName('card-content');
const weatherBackground = document.getElementsByTagName('BODY')[0];

//function that updates the UI of the weather app.
const weatherDetails = async (data) => {

    const weatherList = data.list;
    const weatherOutput = weatherList[0].weather[0].icon;

    //Conditional statement that changes the background based on the weather codes in the API.
    switch (weatherOutput) {
        case '01d': case '02d': case '01n': case '02n':
            weatherBackground.style.background = 'url(assets/img/nice-weather.jpg)';

            break;
        case '03d': case '04d': case '13d': case '03n': case '04n': case '13n':
            weatherBackground.style.background = 'url(assets/img/misty-weather.png")';

            break;
        case '09d': case '10d': case '09n': case '10n':
            weatherBackground.style.background = 'url(assets/img/rainy-weather.jpg)';

            break;
        case '11d': case '11n':
            weatherBackground.style.background = 'url(assets/img/thunderstorm-weather.jpg)';

    };

    //dom manipulation that displays the name of the city.
    cityName.innerHTML = `<h4>${data.city.name}</h4>`;

    //Loops through a list of data and displays that data through a template literal.
    for (i = 0, d = 0; i < weatherList.length; i++ , d += 8) {

        const weatherIcon = weatherList[d].weather[0].icon;

        cardContent[i].innerHTML = `<div class="forecast">${weatherList[d].weather[0].description}</div>
                                    <div class="icon"><img src='/assets/img/${weatherIcon}.svg'></div>
                                    <div class="temp">${Math.round(weatherList[d].main.temp)} °C</div>
                                    <div class="humidityIcon">${weatherList[d].main.humidity} %</div>`
    };
};

const callback = () => {
    // variable that stores the input
    const input = form.stad.value.trim();
    form.reset();

    //function call that takes the input of a city and fetches the data of the weather and passes it
    fetchCity(input)
        .then(data => weatherDetails(data))
        .catch(err => console.log(err));
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    callback();
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    callback();
});





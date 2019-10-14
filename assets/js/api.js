
//fetching API data
const apiKey = '4f015f83faa2211dcb735f26c2785348';

// function that fetches weather data from a specific city and returns it for use
const fetchCity = async (city) => {

    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='
    const query = `${city}&units=metric&appid=${apiKey}`
    const resp = await fetch(url + query);
    const apiData = await resp.json();

    return apiData;
}

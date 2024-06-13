const request = require("request");

const forecast=(latitude, longitude, callback)=> {
    const weatherAppURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6fa293190b71670859c3e607dd27685`;
    request({ url: weatherAppURL, json: true }, (err, res) => {
        if (err) {
            callback("Unable to connect to server.Try again..!",undefined);
        } else {
            callback(undefined,`Data is clear throughout the day,Its currently ${res.body.main.temp}. There is ${res.body.clouds.all}% chance of Rain.`);
        }
    });
}


module.exports=forecast;
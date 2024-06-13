const request=require('request');

const geoLocation = (location,callback) => {
    const geoLocationURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b6fa293190b71670859c3e607dd27685`;
    request({ url: geoLocationURL, json: true }, (err, res) => {
        if (err) {
            callback("Unable to connect to Server.Try another time..",undefined);
        }else {
            callback(undefined,{
                location:res.body[0].name,
                latitude:res.body[0].lat,
                longitude:res.body[0].lon
            });
        }
    });
};

module.exports=geoLocation;


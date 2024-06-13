const forecast = require('./utils/forecast');
const geolocation = require('./utils/geolocation');

const address = process.argv[2];

if (!address) {
    console.log('Error:Plz provide the address as argument!');
}
else {
    geolocation(address, (err, res) => {
        if (err === undefined) {
            console.log(res);
        } else if (res === undefined) {
            console.log("Error", err);
        } else {
            console.log("Error", err);
            console.log(res);
        }
        forecast(res.latitude, res.longitude, (err, res) => {
            if (err === undefined) {
                console.log(res);
            } else if (res === undefined) {
                console.log("Error", err);
            } else {
                console.log("Error", err);
                console.log(res);
            }
        });
    });
}
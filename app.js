const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const args = yargs
    .options({
        a: {
            describe: 'Address of place',
            demand: true,
            alias: 'address',
            string: true
        },
        l: {
            describe: 'Output language, available options are en (default), ja',
            demand: false,
            alias: 'lang',
            string: true
        }
    })
    .help()
    .alias('help', 'h')    
    .argv;
var labels = {
    latitude: [
        'latitude',
        '緯度'
    ],
    longitude: [
        'longitude',
        '経度'
    ],
    address: [
        'address',
        '住所'
    ],
    temperature: [
        'temperature',
        '温度'
    ],
    summary: [
        'summary',
        '最後'
    ]
};

geocode.geocodeAddress(args.a, (locationError, locationRes) => {
    var i = 0;
    if (args.l) {i = 1;}
    if (locationError) {
        console.log(locationError);
    }
    else {
        console.log(`${labels.address[i]} : ${locationRes.address}`);
        console.log(`${labels.latitude[i]} : ${locationRes.latitude}`);
        console.log(`${labels.longitude[i]} : ${locationRes.longitude}`);
        weather.getWeather(locationRes, args.l, (weatherError, weatherRes) => {
            if (weatherError) {
                console.log(weatherError);
            }
            else {
                console.log(`${labels.temperature[i]} : ${weatherRes.temperature}°C`);
                console.log(`${labels.summary[i]} : ${weatherRes.summary}`);
            }
        });
    }
});

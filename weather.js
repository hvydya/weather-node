const request = require('request');

var getWeather = (res, lang, callback) => {
    var myURL;
    if (lang) {
        myURL = `https://api.darksky.net/forecast/${process.env.DARK_SKY}/${res.latitude},${res.longitude}?units=si&exclude=hourly,dailyflags&lang=ja`;
    }
    else {
        myURL = `https://api.darksky.net/forecast/${process.env.DARK_SKY}/${res.latitude},${res.longitude}?units=si&exclude=hourly,dailyflags`;
    }
    request({
        url: myURL,
        json: true
    }, (error, body, response) => {
        if (error || body.statusCode !== 200) {
            callback('Dark sky error');
        }
        else {
            callback(undefined, {
                temperature: body.body.currently.temperature,
                summary: body.body.daily.summary
            });
        }
    });
}

module.exports.getWeather = getWeather;
const request = require('request')

const forecast = (latitude, longitude, cb) => {

    const url = `https://api.darksky.net/forecast/2a31f7ae5ce558b23356746b35f4566d/${latitude},${longitude}?units=si&lang=en`
    
    // shorthand syntax on url?
    request({ url, json: true }, (err, { body }) => {
        // console.log(data.body.hourly.summary)
        if (err) {
            cb('A connection could not be made', undefined)
        } else if (body.error) {
            cb(body.error, undefined)
        } else {
            cb(undefined, 
            `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out.
            The high today is ${body.daily.data[0].temperatureHigh} degrees with a low of ${body.daily.data[0].temperatureLow} degrees. 
            There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast
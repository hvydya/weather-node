# weather-node
A node.js weather-fetching application

Date : 28-04-18 Saturday

Author : Harsha

A simple weather-fetching application written in node.js fetches the weather of requested place via terminal. Internet connection required.
Incase you want to run the application on your device, contact me for the key used in both the APIs.

APIs used:
1. Google Geocode API : fetches the coordinates of the requested place.
2. DarkSky API : fetches the weather by taking the coordinates of a place.

NPM packages used:
1. Yargs : for command-line parsing.
2. Request : for sending HTTP requests and obtaining info from the API.

Output fetches:
1. Latitude
2. Longitude
3. Address
4. Temperature
5. Summary of the temperature for the day.

Supports two languages i.e English and Japanese.

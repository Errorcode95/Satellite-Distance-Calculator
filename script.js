var lat0 = 0.0
var long0 = 160.0
var lat1 = -41.2
var long1 = 174.7

var x = Math.sin(lat0) * Math.sin(lat1) + Math.cos(lat0) * Math.cos(lat0) * Math.cos(long0 - long1)

console.log (x)
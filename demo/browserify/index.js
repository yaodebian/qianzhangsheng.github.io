var $ = require('../jquery-1.11.2.min');
var hello = require('./hello');
var test = require('./test');

$('body').append('<div>' + hello('Muffin') + '</div>');
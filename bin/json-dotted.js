#! /usr/bin/env node
let doterize = require('../lib/app');

let jsonObject = JSON.parse(process.argv[2]);



console.log(doterize(jsonObject).keys);
var mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sarge',
    database: 'cow_farm'
})

connection.connect((err) => {
    if (err) {
        console.log('error connecting to server', err)
        return;
    }
    console.log('connection successful')
});

// add a cow and description
var getCow = (callback) => {
    // fetch all users
    var queryStr = 'SELECT * FROM cows';
    connection.query(queryStr, function(err, results) {
        callback(err, results);
    });
}
var addCow = (params, callback) => {
    // create a user
    var queryStr = 'insert into cows(name, description) values (?, ?)';
    connection.query(queryStr, params, function(err, results) {
        callback(err, results);
    });
}

addCow('Mike', 'yadayada')
module.exports.addCow = addCow;
module.exports.getCow = getCow;

// get all cows at initialize (controller)

// var addCow = (name, description) => {
    //   return promiseAll(`INSERT INTO cows ('name', 'description') VALUES (${name}, ${description})`)
    // }
    // var getCow = () => {
        //     return promiseAll('SELECT * FROM cows')
        // }
        //var promiseAll = util.promisify(connection.query).bind(connection)
        // https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql/51690276
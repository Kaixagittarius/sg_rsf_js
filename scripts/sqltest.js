const sql = require('mssql');

const config = {
    server: 'localhost',
    database: 'SG_RSF',
    user: 'RSF_GOLIVARES',
    password: '123456',
    port: 1433
};

function loadEmployees(callback) {
    var dbConn = new sql.ConnectionPool(config);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("SELECT * FROM USUARIO").then(function (recordSet) {
            dbConn.close();
            callback(recordSet);
        }).catch(function (err) {
            dbConn.close();
            callback(err);
        });
    }).catch(function (err) {
        callback(err);
    });
}

loadEmployees(function(res) {
	console.log(res);
});
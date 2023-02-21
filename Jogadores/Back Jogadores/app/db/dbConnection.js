async function connectDB(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({host: "localhost",
      user: "root",
      password: "testpwd",
      database: "bd_player",
      port: 3305});

    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = { connectDB }
// const mongoose = require("mongoose");
const { dbUrl } = require("../app/config");
// mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
// const db = mongoose.connection;

// module.exports = db;

const mongoose = require("mongoose");
// const { dbHost, dbPass, dbUser } = require("../app/config");
mongoose.connect(`${dbUrl}`);
const db = mongoose.connection;

module.exports = db;

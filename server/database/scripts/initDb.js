const pgtools = require("pgtools");
const config = require("../../config/database").database;

console.log("confiig:", config);

const options = {
  user: config.username,
  password: config.password,
  host: config.host,
};

// pgtools.dropdb(options, config.dbName, function(err, res) {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });

pgtools.createdb(options, config.dbName, function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log("Success!");
    process.exit(-1);
  }
});

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const URI = 'postgres://shpqlifz:85bmK-DSdrh0NN0tE4rOWCV1CxNYnTTU@rajje.db.elephantsql.com:5432/shpqlifz';
const SQL = fs.readFileSync(path.join(__dirname, './queries.sql')).toString();

const pool = new Pool({ connectionString: URI });


pool.connect(async (err) => {
  if(err) console.log('Cannot Connect to Database');
  else await pool.query(SQL);
});


module.exports = pool;
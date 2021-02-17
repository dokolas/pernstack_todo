const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dokolas",
  password: "@Micro52",
  database: "pernstack_todo",
  port: 5432,
  host: "localhost",
});

module.exports = pool;

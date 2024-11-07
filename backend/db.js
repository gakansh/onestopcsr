const { Pool } = require('pg');

const pool = new Pool({
  user: 'your-username', // replace with your PostgreSQL username
  host: 'localhost',
  database: 'csr_platform',
  password: 'your-password', // replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;

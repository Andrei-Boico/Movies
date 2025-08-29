
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Film',
  password: 'andrei1703',
  port: 5432,
});

export default pool;


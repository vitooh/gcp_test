var Pool = require('pg').Pool
var pool = new Pool({
  user: 'postgres',
  host: '34.65.151.173',
  database: 'postgres',
  password: '1233123',
  port: 5432,
})
var getTest = (request, response) => {
  pool.query('SELECT * FROM test', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
  getTest
}

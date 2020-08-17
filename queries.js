const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'menu',
  password: 'novakdjokovic1',
  port: 5432,
})

const getItems = (request, response) => {
  pool.query('SELECT * FROM cafedujour ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createItem = (request, response) => {
  const { name, type, price } = request.body

  pool.query('INSERT INTO cafedujour (name, type, price) VALUES ($1, $2, $3)', [name, type, price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added`)
  })
}

module.exports = {
	getItems,
	createItem
}
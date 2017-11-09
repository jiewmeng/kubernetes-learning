const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World from Express NEW!')
})

app.listen(PORT, (err) => {
  if (err) return console.error(`Error: ${err.message}`)
  console.log(`Server started on ${PORT}`)
})

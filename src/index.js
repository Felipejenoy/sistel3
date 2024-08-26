const express = require('express')
//Configuraciones
const app = express()
const port = 3000
//rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
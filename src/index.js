const express = require('express')
//Configuraciones
const app = express()
app.set('port',process.env.PORT || 3000);

//rutas
app.use(require('./routes/index'));

//servidor
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port`,app.get('port') )
})
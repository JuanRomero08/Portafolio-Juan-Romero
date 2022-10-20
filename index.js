const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  //res.send('Pagina Principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/educacion', (req, res) => {
  res.render('educacion',{ 
  titulo: "Seccion Educacion",
  descripcion: "Aqui encontraras mi formacion academica"
  })
})

app.get('/conocimientos', (req, res) => {
  res.render('conocimientos'
  )
})


app.use((req, res, next) =>{
  res.status(404).sendfile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Accede al servidor haciendo click aqui http/localhost:${port}`)
})
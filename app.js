const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
  const mahasiswa = [
      {
          nama: 'Agung',
          email: 'agung@gmail.com'
      },
      {
        nama: 'Akane',
        email: 'akane@gmail.com'
    }
  ]  
  res.render('index', {
      title: 'Home',
      layout: 'layouts/main-layout',
      mahasiswa
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About',
      layout: 'layouts/main-layout'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
      title: 'Contact',
      layout: 'layouts/main-layout'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000
const mysql = require('mysql')
var bodyParser = require('body-parser')

app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'apmsetup',
    database:'test',
    port:'3306'
})

db.connect();
db.query('select * from test1', (error, result) => {
    // console.log(result);
});

// 라우팅

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/profile', (req, res) => {
    res.render('profile')
    })
    


app.get('/test',(req,res) => {
    res.send('<h1>test</h1>')
})

app.get('/map',(req,res) => {
    res.render('map')
})

app.get('/contact',(req,res) => {
    res.render('contact')
})


app.post('/contactProc',(req,res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const memo = req.body.memo;

    var a = `${name} ${phone} ${email} ${memo}`
    res.send(a)
})



app.listen(port, () => {
  console.log(`서버가 실행되었습니다. 접속주소: http://localhost:${port}`)
})
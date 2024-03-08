const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const { requireAuth, checkUser } = require('./middlewares/authMiddlewares')
const jwt = require('jsonwebtoken');


const path = require('path');
const app = express()

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.use(authRoutes)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const MONGODB_URI = 'mongodb+srv://880Mutti:880Mutti@cluster0.oscplab.mongodb.net/brickabyte?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000")
        })
    })
    .catch((err) => console.log(err))

app.get('*', checkUser)

app.get("/", (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "secret", (err, decodedToken) => {
            if (err) {
                res.render('login')
            } else {
                res.render('Bricka')
            }
        });
    } else {
        res.render("login");
    }
})

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/estimation', (req, res) => {
    res.render('estimation');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/careers', (req, res) => {
    res.render('careers');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/Bricka', (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "secret", (err, decodedToken) => {
            if (err) {
                res.render('login')
            } else {
                res.render('Bricka')
            }
        });
    } else {
        res.render('Bricka');
    }
});

app.listen(5000, '0.0.0.0');





const routes = require('express').Router();
const exphbs = require('express-handlebars');

let hbsHelper = exphbs.create({

})

const home = require('./../api/home');

const likes = require('./../api/likes');


routes.get('/', (req, res) => {
    res.render('index', {
        showTitle: true,
        showAbout: false,
        pageTitle: "Full Stack JavaScript Developer",
        home,
    });
});

routes.get('/work', (req, res) => {
    res.render('index', {
        showTitle: false,
        showAbout: false,
        pageTitle: "Work",
        workData,
        
    })
});

routes.get('*', (req, res) => {
    res.render('404', {status: 404})
})

module.exports = routes;
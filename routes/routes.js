const routes = require('express').Router();
const exphbs = require('express-handlebars');

let hbsHelper = exphbs.create({

})

const home = require('./../api/home');
const workData = require('./../api/work');
const about = require('./../api/about');

routes.get('/', (req, res) => {
    res.render('index', {
        showWork: false,
        showTitle: true,
        showAbout: false,
        pageTitle: "Full Stack Web Developer",
        home
    });
});

routes.get('/work', (req, res) => {
    res.render('index', {
        showWork: true,
        showTitle: false,
        showAbout: false,
        pageTitle: "Work",
        workData,
        
    })
});

routes.get('/about', (req, res) => {
    res.render('index', {
        showWork: false,
        showTitle: false,
        showAbout: true,
        pageTitle: 'About',
        about,
    })
})

module.exports = routes;
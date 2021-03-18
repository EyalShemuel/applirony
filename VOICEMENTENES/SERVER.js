/******************************************
 *  Author : eyal shemuel   
 *  Created On : Sun Jan 10 2021
 *  File : SERVER.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const URL = "mongodb+srv://eyal:DJrakrVxjn9zk3P@cluster0.xxltr.mongodb.net/test5";
//const URL = "mongodb://localhost:27017";

const Dictionary = require('./test.json');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))

const words = [{HEBWord:"אבא",ENGWord:"aba"},{HEBWord:"אמא",ENGWord:"ima"}]
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => { console.log(err) });

const WordRenounced = mongoose.model('HebWords', {
    HEBWord: String,
    ENGWord: String
});

WordRenounced.insertMany(words, function (err, docs){})
// let mytest = { name: 'Hundai', price: 120000 };
// console.log(typeof mytest);

/* const words = new HebWordRenounced({ name: 'Hundai', price: 120000 });
words.save().catch(e => { console.log(e) }); */



/* mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Car = mongoose.model('Car', {
    name: String,
    price: Number
});

const bmw = new Car({ name: 'Hundai', price: 120000 });
bmw.save().then(doc=> console.log(doc)).catch(e=> {console.log(e)});

 */


/* app.post('/buttonsClicked', (req, res) => {
    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);
    const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
   
}); */


app.listen(port, () => { console.log(`Listen on port ${port}`) });

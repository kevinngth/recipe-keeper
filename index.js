/*
==================================================
╔╗ ┌─┐┬┬  ┌─┐┬─┐┌─┐┬  ┌─┐┌┬┐┌─┐
╠╩╗│ │││  ├┤ ├┬┘├─┘│  ├─┤ │ ├┤
╚═╝└─┘┴┴─┘└─┘┴└─┴  ┴─┘┴ ┴ ┴ └─┘
==================================================
*/
console.log("running index.js");
const jsonfile = require('jsonfile');
const file = 'data.json';
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
/*
==================================================
╦  ┌─┐┌┐┌┌┬┐┬┌┐┌┌─┐
║  ├─┤│││ │││││││ ┬
╩═╝┴ ┴┘└┘─┴┘┴┘└┘└─┘
==================================================
*/
app.get('/',(req,res)=>{res.send('landing page!')});
/*
==================================================
╦┌┐┌┌┬┐┌─┐─┐ ┬
║│││ ││├┤ ┌┴┬┘
╩┘└┘─┴┘└─┘┴ └─
==================================================
*/
app.get('/recipes/',(req,res)=>{res.send('landing page!')});
/*
==================================================
╔╗╔┌─┐┬ ┬
║║║├┤ │││
╝╚╝└─┘└┴┘
==================================================
*/
app.get('/recipes/new',(req,res)=>{res.render('new')});
/*
==================================================
╔═╗┬─┐┌─┐┌─┐┌┬┐┌─┐
║  ├┬┘├┤ ├─┤ │ ├┤
╚═╝┴└─└─┘┴ ┴ ┴ └─┘
==================================================
*/
app.post('/recipes',(req,res)=>{res.send('landing page!')});
/*
==================================================
╔═╗┬ ┬┌─┐┬ ┬
╚═╗├─┤│ ││││
╚═╝┴ ┴└─┘└┴┘
==================================================
*/
app.get('/recipes/:id',(req,res)=>{res.send('landing page!')});
/*
==================================================
╔═╗┌┬┐┬┌┬┐
║╣  │││ │
╚═╝─┴┘┴ ┴
==================================================
*/
app.get('/recipes/:id/edit',(req,res)=>{res.send('landing page!')});
/*
==================================================
╦ ╦┌─┐┌┬┐┌─┐┌┬┐┌─┐
║ ║├─┘ ││├─┤ │ ├┤
╚═╝┴  ─┴┘┴ ┴ ┴ └─┘
==================================================
*/
app.put('/recipes/:id',(req,res)=>{res.send('landing page!')});
/*
==================================================
╔╦╗┌─┐┌─┐┌┬┐┬─┐┌─┐┬ ┬
 ║║├┤ └─┐ │ ├┬┘│ │└┬┘
═╩╝└─┘└─┘ ┴ ┴└─└─┘ ┴
==================================================
*/
app.delete('/recipes/:id',(req,res)=>{res.send('landing page!')});
/*
==================================================
╔═╗┌─┐┬─┐┌┬┐
╠═╝│ │├┬┘ │
╩  └─┘┴└─ ┴
==================================================
*/
app.listen(3000,()=>console.log('OPENED PORT 3000'));
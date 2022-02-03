const express = require('express')
const app = express();
const exphbs = require('express-handlebars');
const { dirs } = require('nodemon/lib/config');

const productosNombres = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']

app.set('view engine', 'handlebars');

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/bootstrapJS', express.static(__dirname + '/node_modules/bootstrap/dist/js/'))


app.engine('handlebars', exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/components',
    helpers: { mensajeBienvenida: () => `Bienvenido(a) al mercado WEB, seleccione los productos que desea llevar` },
}))

app.get('/', (_, res) => {
    res.render('Dashboard', {
        productos: productosNombres,
    });
});

app.listen(3000, () => {
    console.log(`SERVER ON`)
});
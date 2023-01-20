const express = require('express');
const app = express();
const PORT = 3000;
const httpServer = require('http').createServer(app);
const io = require('socket.io') (httpServer, {cors: {origin:"*"}})


app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

const { engine } = require('express-handlebars');

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
    })
);

const { selectProduct } = require('./SQL-Querys/selectProduct.js');
let product = selectProduct.select('ALL');

const { selectMessage } = require('./Lite-Querys/selectMessages.js');
let chat = selectMessage.select('ALL');

app.get('/', (req, res) => {
    res.render('productslist', { root: __dirname + 'public'});
});

io.on('connection', (socket) => {
    console.log(`New connection id: ${socket.id}`);
    socket.emit('products', product);
    socket.emit('chat', chat);

    socket.on('newMessage', (msg) => {
        chat.push(msg);
        socket.emit('chat', chat);
    });

    socket.on('addProduct', (product) => {
        chat.push(product);
        socket.emit('products', product);
    });
});

httpServer.listen(PORT, ()=>{
    console.log(`Server listening in port: ${PORT}`);
});

// app.post('/', (req, res) => {
//     const newID = products.length + 1;
    
//     const productToAdd = req.body;
//     const newProduct = {'id':newID, ...productToAdd};
//     products.push(newProduct);
//     res.redirect('/');  
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Listening in port ${PORT}`));

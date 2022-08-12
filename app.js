const expess = require('express');
const app = expess();
const morgan = require('morgan');
const contactsRoute = require('./routes/contacts');


app.use(morgan('dev'));
app.use('/contatos', contactsRoute);

app.use((req,res,next)=>{
    const erro = new Error('Rota não encontrada!');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: "" + error.message
        }
    });
});

module.exports = app;
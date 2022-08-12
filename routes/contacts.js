const expess = require('express');
const router = expess.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'EXIBINDO CONTATOS',
    });
})

router.get('/:contact_number', (req, res, next) => {
    const contact_number = req.params.contact_number   

    res.status(200).send({
        mensagem: 'Retorna contato específico com o número ' + contact_number, 
    });
})

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Adicionando aos contatos',
    });
})

router.patch('/:contact_number', (req, res, next) => {
    const contact_number = req.params.contact_number    

    res.status(201).send({
        mensagem: 'Atualizando registros do contato ' + contact_number, 
    });
})

router.delete('/:contact_number', (req, res, next) => {
    const contact_number = req.params.contact_number    

    res.status(201).send({
        mensagem: 'Deletando o contato ' + contact_number, 
    });
})



module.exports = router;
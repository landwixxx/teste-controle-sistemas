const expess = require('express');
const router = expess.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        if (error){ return res.status(500).send({error: error})}

        conn.query('SELECT * from contatos;',
        (error, resultado, fields) => {
            if (error){ return res.status(500).send({error: error})}
            return res.status(200).send({response: resultado})
        })
    })
});



router.post('/', (req, res, next) => {
    const contact = {
        name : req.body.nome,
        number : req.body.numero
    }

    mysql.getConnection((error, conn)=>{
        conn.query(
            'INSERT INTO contatos (number, name) VALUES (?,?)',
            [contact.number, contact.name ],            
            (error, resultado, field) => {
                conn.release();

                if(error){
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Contato adicionado à agenda',
                    numero : contact.number,
                    nome: contact.name,
                    id: resultado.insertId
                });
            }
        )
    });    
})

router.patch('/', (req, res, next) => {
    const contact = {
        name : req.body.nome,
        number : req.body.numero,
        id : req.body.id
    }  

    mysql.getConnection((error, conn)=>{
        conn.query(
            'UPDATE contatos SET number = ?, name = ? WHERE id = ?',
            [contact.number, contact.name, contact.id ],            
            (error, resultado, field) => {
            conn.release();

                if(error){
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                return res.status(202).send({
                    mensagem: 'Contato Atualizado na agenda',
                    numero : contact.number,
                    nome: contact.name,
                });
            }
        )
    })

})

router.delete('/:contact_number', (req, res, next) => {
    const contact = {
        name : req.body.nome,
        number : req.body.numero,
        id : req.body.id
    }  

    mysql.getConnection((error, conn)=>{
        conn.query(
            'DELETE from contatos WHERE id = ?',
            [contact.id ],            
            (error, resultado, field) => {
            conn.release();

                if(error){
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                return res.status(202).send({
                    mensagem: 'Contato Deletado da agenda',
                    numero : contact.number,
                    nome: contact.name,
                });
            }
        )
    })
})



module.exports = router;
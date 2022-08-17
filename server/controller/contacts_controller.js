const mysql = require('../mysql').pool;

exports.getContatos = (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        if (error){ return res.status(500).send({error: error})}

        conn.query('SELECT * from contatos;',
        (error, resultado, fields) => {
            if (error){ return res.status(500).send({error: error})}
            
            return res.status(200).send(resultado)
        })
    })
};

exports.fetchContato =  (req, res, next) => {
    const contact = {
        name : req.body.name,
        number : req.body.number,
        id : req.body.id
    }  

    mysql.getConnection((error, conn)=>{
        conn.query(
            'SELECT * from contatos WHERE id = ?',
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
                    mensagem: 'Buscando contato',
                    resultado
                });
            }
        )
    })
};

exports.postContato = (req, res, next) => {
    const contact = {
        name : req.body.name,
        number : req.body.number
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
                });
            }
        )
    });    
};

exports.patchContato = (req, res, next) => {
    const contact = {
        name : req.body.name,
        number : req.body.number,
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
                    });
                }
            )
        })  
};

exports.deleteContato = (req, res, next) => {
    const contact = {
        id : req.body.id
    }  
    console.log(contact.id);
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
                });
            }
        )
    })
};


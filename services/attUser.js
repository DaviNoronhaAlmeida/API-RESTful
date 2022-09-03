async function attUser(req, res) {

    try {
        const fs = require('fs').promises;

        let data = await fs.readFile('./database/users.json', 'utf-8');
        data = JSON.parse(data);

        if(data.users[req.params.id - 1].delete === true) {
            res.end();
            return;
        };
        
        data.users[req.params.id - 1].nome = req.body.nome;
        data.users[req.params.id - 1].email = req.body.email;

        fs.writeFile('./database/users.json', JSON.stringify(data, null, 2));
        res.status(200).send('Atualizado');
    } catch (error) {
        console.log(error);
        res.status(400).json({"msg": error.message});
    };

};

module.exports = { attUser };
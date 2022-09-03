async function createUser(req, res) {
    
    try {
        const fs = require('fs').promises;

        let data = await fs.readFile('./database/users.json', 'utf-8');
        data = JSON.parse(data);
        
        data.users.push({
                "nome": req.body.nome,
                "email": req.body.email,
                "delete": false,
                "id": data.users.length + 1
        });

        fs.writeFile('./database/users.json', JSON.stringify(data, null, 2));
        res.status(200).end();

    } catch (error) {
        console.log(error);
        res.status(400).json({"msg": error.message});
    }

};

module.exports = { createUser };
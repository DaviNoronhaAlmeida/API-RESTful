async function deleteUser(req, res) {

    try {
        const fs = require('fs').promises;

        let data = await fs.readFile('./database/users.json', 'utf-8');
        data = JSON.parse(data);

        if(data.users[req.params.id - 1].delete === true) {
            res.end();
            return;
        };

        data.users[req.params.id - 1].delete = true;

        fs.writeFile('./database/users.json', JSON.stringify(data, null, 2));
        res.status(200).send('Deletado');

    } catch (error) {
        console.log(error);
        res.status(500).json({"msg": error.message});
    }; 

};

module.exports = { deleteUser };
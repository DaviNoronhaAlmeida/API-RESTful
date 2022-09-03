async function getUser(req, res) {
    
    try {
        const fs = require('fs').promises;

        let data = await fs.readFile("./database/users.json", "utf-8");
        data = JSON.parse(data);

        if(data.users[req.params.id - 1].delete === true) {
            res.end();
            return;
        };
        
        res.status(200).send(data.users[req.params.id - 1]);

    } catch (error) {
        console.log(error);
        res.status(500).json({"msg": error.message});
    };

};

module.exports = { getUser };
async function getUsers(req, res) {
    
    try {
        const fs = require('fs').promises;

        let data = await fs.readFile("./database/users.json", "utf-8");
        data = JSON.parse(data);
        res.status(200).send(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg": error.message});
    };

};

module.exports = { getUsers };
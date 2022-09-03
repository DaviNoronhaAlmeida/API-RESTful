module.exports = (app) => {
    const controller = require('../controllers/controllers.js');

    app.route('/usuarios')
        .get(controller.get)
        .post(controller.post);
    
    app.route('/usuarios/:id')
        .get(controller.getOne)
        .put(controller.put)
        .delete(controller.delete);

};
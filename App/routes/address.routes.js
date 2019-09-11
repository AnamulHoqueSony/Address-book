  
module.exports = (app) =>{

    const contract = require('../controllers/address.controller.js');


    app.post('/contract',contract.create);

   app.get('/contract',contract.findAll);

   app.get('/contract/:addId',contract.findOne);

   app.put('/contract/:addId',contract.update);
    
   app.delete('/contract/:addId',contract.delete);
}
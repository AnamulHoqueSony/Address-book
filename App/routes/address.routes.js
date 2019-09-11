  
module.exports = (app) =>{

    const contract = require('../controllers/address.controller.js');


    app.post('/contract',contract.create);

   app.get('/contract',contract.findAll);

   //app.get('/address/:addId',address.findOne);

   //app.put('/address/:addId',address.update);
    
   app.delete('/contract/:addId',contract.delete);
}
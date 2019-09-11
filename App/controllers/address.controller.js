const Contract = require('../models/address.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Note name can not be empty"
        });
    }

    // Create a contact
    const contract = new Contract({
        name: req.body.nane ,
        phone: req.body.phone,
        postcode:req.body.postcode,
        email:req.body.email,
        city:req.body.city,

    });

    // Save contact in the database
    contract.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};
exports.findAll = (req, res) => {
    Contract.find()
    .then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
          message:err.message || "Some error occoured while retriving notes."
        });
    });

};

exports.delete = (req, res) => {
    Contract.findByIdAndRemove(req.params.AddId)
    .then(data=> {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.AddId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.AddId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.AddId
        });
    });
};

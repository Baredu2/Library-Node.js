const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Klient = require("../models/klient");
const checkAuth = require("../middleware/check-auth")

router.get("/", checkAuth, (req, res, next)=> {
    Pacjent.find().exec()
    .then(docs=> {
        res.status(200).json(docs);
    })
    .catch(err => res.status(500).json({error: err}));
    
});

router.post("/", checkAuth, (req, res, next)=> {
    console.log(req.file);
    const pacjent = new Klient({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        PESEL: req.body.PESEL,
        
    });
    pacjent.save()
    .then(result => {
        res.status(200).json({
            message: "Dodano nowego klienta",
            createdProduct: klient
        });
    })
    .catch(err => res.status(500).json({error: err}));
    
});

router.get("/:klientId", (req, res, next)=> {
    const id = req.params.klientId;
    Klient.findById(id).exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => res.status(500).json({error: err}));

    
});

router.patch("/:klientId", (req, res, next)=> {
    const id = req.params.pacjentId;
    console.log(req.file);
    Klient.update({_id:id}, { $set: {
        name: req.body.name,
        surname: req.body.surname,
        PESEL: req.body.PESEL,
        
    }}).exec()
    .then(result=> {
        res.status(200).json({message: "Update klienta, nr: " + id});
    })
    .catch(err => res.status(500).json({error: err}));

    
});

router.delete("/:klientId", checkAuth, (req, res, next)=> {
    const id = req.params.pacjentId;
    Pacjent.remove({_id: id}).exec()
    .then(result=> {
        res.status(200).json({message: "Usunięto klienta " + id});
    })
    .catch(err => res.status(500).json({error: err}));
    
});

module.exports = router;
const express = require('express');

const db = require('../data/db-config');

const Pets = require('./pets-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Pets.find()
  .then(pets => res.json(pets))
  .catch(err => res.status(500).json({ message: "Failed to get pets"}))
});

router.get('/dogs', (req, res) => {
    Pets.findDogs()
    .then(dogs => res.json(dogs))
    .catch(err => res.status(500).json({ message: "Failed to get dogs"}))
})

router.get('/cats', (req, res) => {
    Pets.findCats()
    .then(cats => res.json(cats))
    .catch(err => res.status(500).json({ message: "Failed to get dogs"}))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Pets.findById(id)
        .then(pet => {
            if (pet) {
                res.json(pet);
            } else {
                res.status(404).json({ message: 'Could not find pet with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get pets' });
        });
});

router.post('/', (req, res) => {
    const petData = req.body;
  
    Pets.add(petData)
        .then(pet => {
            res.status(201).json(pet);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new pet' });
        });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Pets.findById(id)
        .then(pet => {
            if (pet) {
                Pets.update(changes, id)
                    .then(updatedPet => {
                        res.json(updatedPet);
                    });
            } else {
                res.status(404).json({ message: 'Could not find pet with given id' });
            }
        })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update pet' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Pets.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find pet with given id' });
            }
        })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete pet' });
    });
  });

  module.exports = router;
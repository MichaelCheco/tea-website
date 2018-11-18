const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile')
const db = knex(knexConfig.development)
const server = express()
server.use(express.json())
server.get('/api/teas', (req, res) => {
    db('Tea')
    .then(teas => {
        res.status(200).json(teas)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get('/api/teas/:id', (req, res) => {

    const { id } = req.params

    db('Tea')
    .where({id})
    .then(tea => {
        res.status(200).json(tea)
    })
    .catch(err => {
        res.status(500).json(err)
      })
})

server.post('/api/teas', (req, res) => {
    const tea = req.body
    db('Tea')
    .insert(tea)
    .then(ids => {
        res.status(201).json(ids)
        .catch(err => {
            res.status(500).json(err)
          })
    })
})

server.put('/api/teas/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('Tea')
    .where({id})
    .update(changes)
    .then(count => {
        res.status(200).json(count)
        .catch(err => {
            res.status(500).json(err)
        })
    })
})

server.delete('/api/teas/:id', (req, res) => {
    const { id } = req.params;
    db('Tea')
    .where({id})
    .del()
    .then(count => {
        res.status(200).json(count)
        .catch(err => {
            res.status(500).json(err)
        })
    })
})
const port = 9000;
server.listen(port, () => console.log(`==^_^== ${port} ==^_^==`))
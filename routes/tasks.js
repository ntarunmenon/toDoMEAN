const express = require('express');
const router = express.Router();

const {Task} = require('../models/task');

router.get('/', async (req, res,next) => { 
  const tasks = await Task.find().sort('name'); 
    res.send(tasks);
  });

  router.post('/', async (req, res) => {
    let task = new Task ({
      description: req.body.description
    });
    console.log(task);
    task = await task.save();
    res.send(task);
  });

  router.delete('/:id', async (req, res) => {
  
    const task = await Task.findByIdAndRemove(req.params.id);
    if (!task) return res.status(404)
      .send('The Task with the given ID was not found.');
    res.send(task);
  });

  router.put('/:id', async (req, res) => {
 
    const task = await Task.findByIdAndUpdate(req.params.id,{description: req.body.description},{
      new :  true
    })
    
    if (!task) return res.status(404).send('The task with the given ID was not found.');
  
    res.send(task);
  });


module.exports = router;
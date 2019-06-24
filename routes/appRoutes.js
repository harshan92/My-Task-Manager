const express = require('express');
const router = express.Router();
var Task=require('../models/taskSchema');

router.post('/create', (req, res,next) => {
    var newTask=new Task({
        taskName:req.body.taskName,
        description:req.body.description
    });
    newTask.save((err,task)=>{
        if(err) res.status(500).json({errMsg:err});
        res.status(200).json({msg:task});
    });
     
});

router.put('/update', (req, res, next) => {
    Task.findByIdAndUpdate({_id:req.body._id},{taskName:req.body.taskName, description:req.body.description},(err, task)=>{
        if(err) res.status(500).json({msg:err});
        res.status(200).json({msg:task});
    });
});

router.get('/read', (req, res) => {
    Task.find({},(err, taskList)=>{
        if(err) res.status(500).json({errMsg:err});
        res.status(200).json({msg:taskList});
    })
    
});

router.delete('/delete/:id', (req, res) => {
    Task.findByIdAndRemove({_id:req.params.id},(err, task)=>{
        if(err) res.status(500).json({errMsg:err});
        res.status(200).json({msg:task});
    })
    
});

module.exports=router;
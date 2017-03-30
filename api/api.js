const db = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {

});
// 获取已有账号接口
router.get('/api/home/list', (req, res) => {

});

router.get('/api/list', (req, res) => {
    console.log(req);
    db.list.find(function(err,data){
        if(err){
            res.send('-1');
        }else{
            res.send(data);
        }
    });
});

router.get('/api/list/:id', (req, res) => {
    var id = req.params.id ;
    db.list.findOne({_id:id},(err,data)=>{
        if(err){
            res.send('-1')
        }else{
            res.send(data);
        };
    });
});

router.post('/api/add', (req, res) => {
    db.list({
        name:req.body.name,
        description:req.body.description,
        url:req.body.url,
        cover:req.body.cover
    }).save((err,data)=>{
        if(err){
            res.send('-1');
        }else{
            res.send('1');
        };
    });
});

router.post('/api/remove', (req, res) => {
    db.list.remove(req.body,(err,data)=>{
        if(err){
            res.send('-1');
        }else{
            res.send('1');
        };
    });
});

module.exports = router;

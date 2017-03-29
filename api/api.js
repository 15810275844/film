// const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
  
});
// 获取已有账号接口
router.get('/api/home/list',(req,res) => {
   
});

router.get('/api/aaa',(req,res) => {
   res.send('1')
});

module.exports = router;
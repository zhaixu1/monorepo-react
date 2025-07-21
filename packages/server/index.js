const express = require('express');
const cors = require('cors'); // cors middleware

const { mockList } = require('./mock/mockList/index')

const app = express(); // 创建express 实例

const router = express.Router(); // 创建路由实例，

router.get('/api/mockList', (req, res) => {
    console.log(req.query);

    let {pageSize, startNum} = req.query || {};
    startNum = parseInt(startNum, 10);
    pageSize = parseInt(pageSize, 10);
    res.json({
        list: mockList.data.slice(startNum, startNum + pageSize),
        total: mockList.length,
        startNum,
        pageSize
    })
    
})

app.use(cors());

app.use(router);

app.listen(3010, () => {
  console.log('server is running at http://localhost:3000');
});

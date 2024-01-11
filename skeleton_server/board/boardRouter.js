const express =require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

// // 유저 요청Url이 http://localhost:8000/boards/boardList 들어오면 실행
// router.get('/boardList', function(req, res, next) {

// })

// 나혼자 수정한부분
router.get('/boardlist', function(req, res, next) {
    console.log('boardlist router.....')
    // const data = req.body 클라이언트에서 넘어오는 데이터 없으
    
    boardDAO.boardList((resp) => {
        // client에 응답
        console.log('router result :', resp)
        res.json(resp)
    })
})

module.exports = router
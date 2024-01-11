const express = require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

// // 유저 요청Url이 http://localhost:8000/boards/boardList 들어오면 실행
// router.get('/boardList', function(req, res, next) {

// })

// 나혼자 수정한부분
router.get('/boardlist', function (req, res, next) {
    console.log('boardlist router.....')
    // const data = req.body 클라이언트에서 넘어오는 데이터 없으

    boardDAO.boardList((resp) => {
        // client에 응답
        console.log('router result :', resp)
        res.json(resp)
    })
})

router.post('/insert', function (req, res, next) {
    // post방식은 Request body를 통해서 데이터 전달하는 방식
    const data = req.body
    // board실행
    boardDAO.insert(data, (resp) => {
        res.json(resp)
    })
})

router.get('/board/:id', function (req, res, next) {
    const id = req.params.id
    boardDAO.board(id, (resp) => {
        res.json(resp)
    })
})

router.post('/delete/:id', function (req, res, next) {

})
router.post('/update', function (req, res, next) {

})
module.exports = router
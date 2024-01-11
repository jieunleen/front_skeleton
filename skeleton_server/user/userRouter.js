const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

// 유저업무와 관련된 요청이 들어왔을때 그 요청을 처리하는 역할
// http://localhost:8000/users/signup
router.post('/signup', async (req, res, next) => {
    console.log('user router, signup......')
    // userDAO.signup(null, (resp) => { 
        // resp.send('success')
        
        // 프론트 전달 데이터 획득
    const data = req.body
    userDAO.signup(data, (resp) => {
        res.send(resp)
    })
    // userDAO.signup({name: '홍길동', email: 'hong@hong.com', password: '1234'}, (resp) => {
        // res.send('resp')
        
    // })
})

router.post('/signin', (req, res, next) => {
    console.log('login router.....')
    const data = req.body
    userDAO.login(data, (resp) => {
        // client에 응답
        res.json(resp)

    })
})



module.exports = router
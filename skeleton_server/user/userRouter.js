const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

// 유저업무와 관련된 요청이 들어왔을때 그 요청을 처리하는 역할
router.get('/signup', async (req, res, next) => {
    console.log('user router, signup......')
    // userDAO.signup(null, (resp) => {
    userDAO.signup({name: '홍길동', email: 'hong@hong.com', password: '1234'}, (resp) => {
        res.send('resp')
        
        // resp.send('success')
    })
})

module.exports = router
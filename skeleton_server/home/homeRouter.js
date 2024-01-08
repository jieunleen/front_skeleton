var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    //index.html이 출력되면서 그곳에{} 정보 넘긴것
    // nunjucks설정이 app.js에 되어 있어야하고
    res.render('index', {title: 'Express'})
})

module.exports = router
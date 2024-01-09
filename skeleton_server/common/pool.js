// 의도 : 이 파일은 dbms을 위해 필요한 connection을 미리 준비하는 파일
// app에서 db와 연동하기 위해서는 db에 connection 해야한다
// db내부적으로 connection은 성능상 상당히 부담스럽다

// 그래서 app에서 db connection을 한정된 개수내에서만 활용할수있게
// 보통의 경우 connection pool을 운영하고 
// 그 pool의 connection만 활용하게 하는것이 일반적이다 

// mysql연동 드라이버
const mysql = require('mysql2/promise')
// const { Pool } = require('mysql2/typings/mysql/lib/Pool')

let pool
// 앱에서 dbms작업이 필요하면 이 함수를 호출해서 connection을 얻어 실행
module.exports = function getPool(){
    if(pool){
        return pool
    }
    // 초기 pool구성 . 즉 초기 connection을 원하는 개수만큼 만들어서 유지
    const config = {
        host: process.env.DB_URL,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10
    }
    return mysql.createPool(config)
}
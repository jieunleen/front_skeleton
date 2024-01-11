const getPool = require('../common/pool')

// 이곳에 필요한 Sql 등록
const sql = {
    boardList: 'SELECT * FROM board',
    insert: '', //sql문
    // boardList: 'INSERT INTO board (name, title, content) VALUES (?,?,?)',
}

const boardDAO = {
    // 게시물 조회 요청이 들어왔을때 Router에 의해 실행되는 함수. 주된역할은 Dbms
    boardList: async (callback) => {
        let conn = null
        try{
            conn = await getPool().getConnection()
            console.log('DAO') //디버깅을 위해
            const [resp] = await conn.query(sql.boardList, [])
            console.log('000', resp)
            callback({status:200, message:'OK', data: resp})
            // if(respCheck[0]){
            //     console.log('1111')
            //     // 이메일로 select되는 데이터가 있다면 이미item.email로 가입된 회원이 있다
            //     callback({status:500, message:'로그인 실패'})
            }catch (error) {
                return {status:500, message:'조회실패', error:error}
            }finally {
                if(conn !== null) conn.release()
            }
    },
    insert: async (item, callback) => {
        
    }
}
module.exports = boardDAO
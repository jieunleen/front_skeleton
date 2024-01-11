import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import React, { useCallback, useState, useEffect } from "react"

const BoardDetail = () => {

    const navigate = useNavigate()

    //라우터에의해 내가 출력되었는데.. 출력시킨 path 조건에서 데이터 획득..
    //즉 자신은 board/1 이런 구조의 url 에 의해 실행.. 1 값 획득..
    const { id } = useParams()

    //서버에서 받은 데이터.. 초기값 비어 있는
    const [board, setBoard] = useState({ name: "", content: "", title: "", cnt: "", createdAt: "" })

    //서버 연동을 위한 함수.. 어디선가 호출한다.. 
    const getBoardDetail = async () => {
        const resp = await axios.get('http://localhost:8000/boards/board/' + id)
        setBoard(resp.data.data)
    }

    const deleteBoard = async (id) => {
        //버튼 클릭시에 호출되어.. 서버에 매개변수 데이터 삭제되게 요청.. 
        //삭제후 화면 목록으로 자동 전환..
    }

    useEffect(() => {
        getBoardDetail()
    }, [])
    return (
        <main id="main">
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">게시물 상세</h1>
                                <span className="color-text-a">board</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Properties Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="property-grid grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>타이틀</td>
                                        <td>
                                            {board.title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>내용</td>
                                        <td>
                                            {board.content}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>작성일</td>
                                        <td>
                                            {board.createdAt}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='text-end'>
                                            <button type='button' className='btn btn-primary btn-sm' onClick={() => navigate('/board/list')}>목록</button>
                                            {" "}
                                            <button type='submit' className='btn btn-warning btn-sm' onClick={() => navigate('/board/update/' + board.id)}>수정</button>
                                            {" "}
                                            <button type='submit' className='btn btn-warning btn-sm' onClick={() => deleteBoard(board.id)}>삭제</button>
                                        </td>
                                    </tr>
                                </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default BoardDetails
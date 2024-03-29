import axios from "axios"
import React, { useCallback, useState } from 'react'
import { useNavigate } from "react-router"

const BoardInsert = () => {
    // 화면조정하려고 쓰는거
    const navigate = useNavigate()
    // 유저입력부분
    const [board, setBoard] = useState({ name: '', title: '', content: '' })
    // 유저입력시 호출되는 함수
    const changeData = useCallback((e) => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }, [board])

    // 등록 버튼 클릭시 콜백 (회원가입이랑 비슷하네~ )
    const insertBoard = useCallback(async (e) => {
        e.preventDefault()
        // 연동 post방식으로 할게. board는 유저가 입력한 데이타
        await axios.post('http://localhost:8000/boards/insert', board)
        // 화면을 자동으로 목록으로..
        navigate('/board/list')
    }, [navigate, board])

    
    return (
        <main id="main">
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">게시물 입력</h1>
                                <span className="color-text-a">Insert</span>
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
                                        <td>이름</td>
                                        <td>
                                            <input type='text' className='form-control' name='name' value={board.name} onChange={changeData} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>타이틀</td>
                                        <td>
                                            <input type='text' className='form-control' name='title' value={board.title} onChange={changeData} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>내용</td>
                                        <td>
                                            <textarea cols="80" rows="10" name='content' className='form-control' value={board.content} onChange={changeData}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='text-end'>
                                            <button type='button' className='btn btn-primary btn-sm' onClick={() => navigate('/board/list')}>취소</button>
                                            {" "}
                                            <button type='submit' className='btn btn-warning btn-sm' onClick={insertBoard}>입력</button>
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


//  이름 board.name 타이틀 board.titld (form-control)board.content
// 취소onClick 입력
export default BoardList
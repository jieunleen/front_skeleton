import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import React, { useCallback, useState, useEffect } from "react"


const BoardList = () => {

    // url path 조정하려고
    const navigate = useNavigate()

    // 이건 지워도 될것같은데...
    const [boardList, setBoardList] = useState({status:'', message:'', data:[]})
    // const changeData = useCallback((e) => {
    //     setData((data) => ({...data, [e.target.name]: e.target.value}))
    // })
    // submit 버튼 클릭 이벤트 
    const getBoardlist = useCallback(async () => {
        // 서버연동
        // 만약500번 에러가 나면 서버에서 나오는그대로 출력할게
        const resp = await axios.get('http://localhost:8000/boards/boardList')
        setBoardList(resp.data)
        }, [])
        useEffect(() => {
            getBoardlist()
        }, [getBoardlist])





    return (
        <main id="main">
            {/* 내가 처리한것
1. class -> className으로 변경하기
2. 위에 수정함! */}
            {/* <!-- ======= Intro Single ======= --> */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Our Amazing Properties</h1>
                                <span className="color-text-a">Grid Properties</span>
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
                    <div calss="row">
                        <div className="col-sm-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>타이틀</th>
                                        <th>이름</th>
                                        <th>작성일</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {boardlist.data.map((board) => (
                                    <tr key ={board.id}>
                                        <td>{board.id}</td>
                                        <td>{board.title}</td>
                                        <td>{board.name}</td>
                                        <td>{board.createdAt}</td>
                                        <td>{board.cnt}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr colSpan={5} className="text-end">
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BoardList
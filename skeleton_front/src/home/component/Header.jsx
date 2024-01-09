import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            {/* html 주석, 들여쓰기 shift alt f 나는 옵션 shift f,
            link로 바꾸기 a를 Link로 바꿔야해 시작, 끝 태그 둘다
            class -> classNameName 으로 바꿔야해 
            <a 로 검색해서 <Link
            /a 로 검색해서 /Link 로 변환하면 빠르고 쉽습니다 */}
            {/* <!-- ===index.html에서 가져옴==== Header/Navbar ======= --> */}
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" href="index.html">Estate<span className="color-b">Agency</span></Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" href="index.html">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " href="about.html">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " href="property-grid.html">Property</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " href="blog-grid.html">Blog</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item " href="property-single.html">Property Single</Link>
                                    <Link className="dropdown-item " href="blog-single.html">Blog Single</Link>
                                    <Link className="dropdown-item " href="agents-grid.html">Agents Grid</Link>
                                    <Link className="dropdown-item " href="agent-single.html">Agent Single</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <i className="bi bi-search"></i>
                    </button>

                </div>
            </nav>
            {/* <!-- End Header/Navbar --> */}
        </div>
    )
}

export default Header
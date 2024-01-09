import React from 'react'
import { Link } from 'react-router-dom'
// end agent 
// carosuel item
// 강사님이랑 똑같이 했나...? 

// <br /> <br />로 바꿔야함 <img> -> <img     />  
// index.html에서 필요한 부분만 복사
// html주석
// html은 single tag허용하지만 jsx xml은 문법이다 single tag 허용하지 않음
// a => Link 태그를 바꾸자 /Link> /Link>
// className => className
// style : inline style, jsx - javascript 표현식으로 되어야함 (표현식 바꾸기)
// {{}}style이걸로 묶어야해! 이게 메인임  ( ""은 값으로만 묶는거여..)
//이미지 경로 public의 images로 교체 (경로 바꿔야함) assets/img -> img
const Home = () => {
    return (
        <div>
            {/* <!-- ======= Intro Section ======= --> */}
            <div className="intro intro-carousel swiper position-relative">

                <div className="swiper-wrapper">
                    {/* css 는 background-image 되지만... 여기선 camelcase 두단어 연결되어야해 */}
                    <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: "url(images/slide-1.jpg)" }}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4 ">
                                                    <span className="color-b">204 </span> Mount
                                                    <br /> Olive Road Two
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: "url(images/slide-2.jpg)" }}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">204 </span> Rino
                                                    <br /> Venda Road Five
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: "url(images/slide-3.jpg)" }}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">204 </span> Alira
                                                    <br /> Roan Road One
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            {/* <!-- End Intro Section --> */}
            <main id="main">




                {/* <!-- ======= Services Section ======= --> */}
                <section className="section-services section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Our Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-cart"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Lifestyle</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-calendar4-week"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Loans</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                                            aliquet elit, eget tincidunt
                                            nibh pulvinar a.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-calendar4-week"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-card-checklist"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Sell</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Services Section --> */}



                {/* 
                <!-- ======= Agents Section ======= --> */}
                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Best Agents</h2>
                                    </div>
                                    <div className="title-link">
                                        <Link href="agents-grid.html">All Agents
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="images/agent-4.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link href="agent-single.html" className="link-two">Margaret Sotillo
                                                        <br /> Escala</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="images/agent-1.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link href="agent-single.html" className="link-two">Stiven Spilver
                                                        <br /> Darw</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="images/agent-5.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link href="agent-single.html" className="link-two">Emma Toledo
                                                        <br /> Cascada</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Agents Section --> */}




                {/* <!-- ======= Testimonials Section ======= --> */}
                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div class="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Testimonials</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="images/testimonial-1.jpg" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                        debitis hic ber quibusdam
                                                        voluptatibus officia expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img src="images/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                                                    <h5 className="testimonial-author">Albert & Erika</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    

                            <div className="carousel-item-a swiper-slide">
                                <div className="testimonials-box">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-img">
                                                <img src="images/testimonial-2.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-ico">
                                                <i className="bi bi-chat-quote-fill"></i>
                                            </div>
                                            <div className="testimonials-content">
                                                <p className="testimonial-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                    debitis hic ber quibusdam
                                                    voluptatibus officia expedita corpori.
                                                </p>
                                            </div>
                                            <div className="testimonial-author-box">
                                                <img src="images/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                                                <h5 className="testimonial-author">Pablo & Emma</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End carousel item --> */}

                        </div>
                    </div>
                    <div className="testimonial-carousel-pagination carousel-pagination"></div>
                </div>
            </section>
            {/* <!-- End Testimonials Section --> */}
        </main>
        </div >
    )
}

export default Home
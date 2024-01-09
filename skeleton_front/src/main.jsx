import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap template 의 index.html 파일에 <link>로 걸리는 css를 추가한 것이다
// 이 css가 각 component에서 class로 사용됨으로 global css로 등록하기 위해서
// 이곳에 import 한것일뿐
import './assets/vendor/bootstrap-icons/bootstrap-icons.min.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/css/style.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

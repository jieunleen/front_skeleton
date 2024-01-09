import { Routes, Route } from 'react-router-dom'

import Header from './home/component/Header'
import Footer from './home/component/Footer'
import HomeMain from './home/HomeMain'
import UserName from './user/UserMain'

const App = () => {
  return (
    <div>
      {/* Header,Footer가 전체화면에서 항상 고정으로 나온다면 아래처럼
      각 화면별로 Header,Footer가 상이하게 적용된다면 Route되는 Component내에~ */}

      <Header />
      {/* 각 화면이 라우팅되게 등록
      각 업무의 첫화면만 등록하고 그안에서의 화면전환은 중첩 라우팅으로 처리
      즉 XXXMain 만 이곳에서 등록하고 XXX업무에 의한 화면 라우팅은 XXXMain에 명시 */}
      <Routes>
        <Route path ='/' element={<HomeMain />} />
        <Route path ='/user/*' element = {<UserName />} />
      </Routes>
      <Footer />

    </div>
  )
}
export default App
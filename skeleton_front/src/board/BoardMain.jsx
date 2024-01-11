import { Route, Routes } from 'react-router-dom'

import BoardList from './component/BoardList'
import BoardInsert from './component/BoardInsert'
import BoardDetail from './component/BoardDetail'

const BoardMain = () => {
    return (
        <div>
            <h2>Board Main</h2>
            <Routes>
                <Route path = '/list' element={<BoardList />} />
                <Route path = '/list' element={<BoardInsert />} />
                <Route path='/detail/:id' element={<BoardDetail/>} />
            </Routes>
        </div>
    )
}
export default BoardMain
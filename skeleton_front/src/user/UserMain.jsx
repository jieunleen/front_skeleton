import { Route, Routes } from 'react-router-dom'
import SignUp from './component/SignUp'

const UserMain = () => {
    return (
        <div>
            <h1>User Main</h1>
            <Routes>
                <Route path = '/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default UserMain
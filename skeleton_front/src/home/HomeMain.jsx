import Home from "./component/Home";

const HomeMain = () => {
    return (
        <div>
            <Home/>
            {/* 의미 없는 컴포넌트가 선언된 것처럼 보이지만
            무언가 상황에 따라 홈화면을 위한 컴포넌트가 더 추가될수도 있고
            홈화면내로 충첩? 중첩? 라우팅으로 여러화면이 변경되면서 나올수도 있어서 유지한다 */}
        </div>
    )
}
export default HomeMain
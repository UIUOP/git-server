import { Link } from "react-router-dom";
import '../pages/Home.css';
import { useState } from 'react';





const Home = () => {
    return (
        <>
            <div className="container">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col">
                    <img className="imgescape" alt="logo2" src="image/1.jpg" style={{ height: '40%', width: '40%' }} />
                </div>
                <div className="space" />

                <div className="pro">
                    <h3> 시민상가 철거반</h3>
                    <p className="">경기/인천[안산] 꿈소풍 안산 2호점</p>
                </div>
                <Link to="/about"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>

        </>

    )
}
export default Home;


import { Link } from "react-router-dom";
import '../pages/Home.css';
import { useState } from 'react';





const Home = () => {
    return (
        <div className="flex_container">
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col1">
                    <img className="imgescape" alt="logo2" src="image/1.jpg" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 시민상가 철거반</h3>
                    <p className="">경기/인천[안산] 꿈소풍 안산 2호점</p>
                </div>
                <Link to="/about"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
                <Link to="/introduce"><button className="btn page2">임시페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/2.png" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 오드의 마법사</h3>
                    <p className="">전라[광주] 러시아워 로드맨션</p>
                </div>
                <Link to="/about2"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/3.png" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 마녀의 숨겨진 물약</h3>
                    <p className="">경상[부산] 더락 이스케이프 하단점</p>
                </div>
                <Link to="/about3"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/4.png" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 지난날을 잊었다</h3>
                    <p className="">서울[홍대] 지구별 방탈출 홍대어드벤처점</p>
                </div>
                <Link to="/about4"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/5.png" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 퀘스트 : 여정의 시작</h3>
                    <p className="">서울[홍대] 지구별 방탈출 홍대어드벤처점</p>
                </div>
                <Link to="/about5"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/6.jpg" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 최대감댁 심부름꾼</h3>
                    <p className="">서울[강남] 더클루 강남점</p>
                </div>
                <Link to="/about6"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src="image/7.jpg" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 왕자 레오</h3>
                    <p className="">서울[강남] 더클루 강남점</p>
                </div>
                <Link to="/about7"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col1">
                    <img className="imgescape" alt="logo2" src="image/8.jpg" style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 냥냥펀치 (일상)</h3>
                    <p className="">경기/인천[안산] 꿈소풍 안산 2호점</p>
                </div>
                <Link to="/about8"><button className="btn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
            </div>
        </div>

    )
}
export default Home;


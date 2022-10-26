/*global kakao*/
import React, { useEffect } from 'react'
import '../Map/Location.css';


const Location = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.31769736304275, 126.83974503891676),
            level: 3
        };
        var content2 = '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';
        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(37.31769736304275, 126.83974503891676);
        var marker = new kakao.maps.Marker({
            title: '꿈소풍',
            position: markerPosition,

        }

        );

        marker.setMap(map);

    }, [])


    return (
        <>
            <div className="right_text">
                <h2>오시는길</h2>
                <div className="table-cell">
                    <dl>
                        <dt>지점명</dt>
                        <dd>꿈소풍 안산2호점</dd>
                    </dl>
                    <dl>
                        <dt>TEL</dt>
                        <dd>010-5554-2034</dd>
                    </dl>
                    <dl>
                        <dt>OPEN</dt>
                        <dd>Mon ~ Sun</dd>
                    </dl>
                    <dl>
                        <dt>ADDRESS</dt>
                        <dd>경기도 안산시 단원구 고잔1길 52 시민빌딩, 3층 방탈출 꿈소풍 2호점</dd>
                    </dl>
                    <dl>
                        <dt>담당자 E-MAIL</dt>
                        <dd><a href="mailto:dlwjddns2008@nate.com"> : dlwjddns2008@nate.com</a></dd>
                    </dl>
                    <dl>
                        <dt>입금계좌</dt>
                        <dd>기업은행 509-027418-01-016 (예금주:민새암)</dd>
                    </dl>

                </div>
                <div id="map" style={{ width: "500px", height: "400px", textAlign: "center", justifyContent: "center", margin: "auto", display: "block" }}></div>
            </div>



        </>
    )
}

export default Location;


{/* <div className="right_text">
    <h2>오시는길</h2>
    <div className="table-cell">
        <dl>
            <dt>지점명</dt>
            <dd>꿈소풍 안산2호점</dd>
        </dl>
        <dl>
            <dt>TEL</dt>
            <dd>010-5554-2034</dd>
        </dl>
        <dl>
            <dt>OPEN</dt>
            <dd>Mon ~ Sun</dd>
        </dl>
        <dl>
            <dt>ADDRESS</dt>
            <dd>경기도 안산시 단원구 고잔1길 52 시민빌딩, 3층 방탈출 꿈소풍 2호점</dd>
        </dl>
        <dl>
            <dt>담당자 E-MAIL</dt>
            <dd><a href="mailto:dlwjddns2008@nate.com"> : dlwjddns2008@nate.com</a></dd>
        </dl>
        <dl>
            <dt>입금계좌</dt>
            <dd>기업은행 509-027418-01-016 (예금주:민새암)</dd>
        </dl>

    </div>

</div> */}

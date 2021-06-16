import React from 'react'
import './style.scss'
import Footer from '../../components/FooterMainPage'
import MainPageLayout from '../../../../layouts/MainPageLayout_1'

function MainPage(props) {
    return (
        <MainPageLayout>
            <div className="slide__container">
                <div className="wrapper__image">
                    <img src="https://t1.daumcdn.net/cfile/tistory/995A17455A409C9A28"
                    alt="algoritm-image-page"
                    />
                </div>
                <div className="modal">
                    <div>
                        <h2>TEST 종료</h2>
                        <p>Coding Test가 종료되었습니다.</p>
                    </div>
                </div>
            </div>
        </MainPageLayout>
    )
}
export default MainPage


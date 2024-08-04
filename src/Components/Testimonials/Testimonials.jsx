import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../asset/next-icon.png'
import back_icon from '../../asset/back-icon.png'
import user1 from '../../asset/user-1.png'
import user2 from '../../asset/user-2.png'
import user3 from '../../asset/user-3.png'
import user4 from '../../asset/user-4.png'

const Testimonials = () => {
    let slider = useRef();
    let tx = 0;

    let slideForward = (e) => {
        if (tx > -50) {
            tx = tx - 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    let slideBackward = (e) => {
        if (tx < 0) {
            tx = tx + 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="next-btn" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="back-btn" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="user1" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="user1" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="user1" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="user1" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
